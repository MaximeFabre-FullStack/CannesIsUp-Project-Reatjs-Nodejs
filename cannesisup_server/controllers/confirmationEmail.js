const Token = require("../models/confirmationToken");
const Adherent = require("../models/adherent");
const crypto = require("crypto");
const sendEmail = require("../helper/sendmail");
const url = require("../url.json");

const confirmationEmail = {
  confirmation: (req, res, next) => {
    Token.findOne({ token: req.params.token }, (err, token) => {
      if (!token) {
        return res.redirect(`${url["client-url"]}/resend/${req.params.email}`);
      }

      // Si le token existe, update de l'adherent
      Adherent.findOneAndUpdate(
        { _id: token._userId },
        { estVerifie: true },
        (err, adherent) => {
          if (!adherent) {
            res.redirect(`${url["client-url"]}/resend/${req.params.email}`);
          }
          res.redirect(`${url["client-url"]}/confirmation`);
        }
      );
    });
  },

  /*  TO DO a raccorder avec le front */
  resend: (req, res, next) => {
    Adherent.findOne({ mailPrive: req.body.email }, (err, adherent) => {
      if (!adherent) {
        res
          .status(400)
          .json({ msg: "aucun utilisateur de correspond à cet email" });
      }

      /* Création du token de verification */
      const token = new Token({
        _userId: adherent._id,
        token: crypto.randomBytes(16).toString("hex"),
      });

      token.save((err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            msg: err.message,
          });
        }

        /* Parametres du mail */
        const email = adherent.mailPrive;
        const message =
          "Hello,\n\n" +
          "Please verify your account by clicking the link: \nhttp://" +
          req.headers.host +
          "adherents/signin/confirmation/" +
          token.token +
          ".\n";
        const subject = "Confirmation de demande d'adhésion à Cannes Is Up";

        /* Appel du helper */
        sendEmail(email, message, subject);
        res.json({
          success: true,
          msg: "un email de vérification a été envoyé à:" + email,
        });
      });
    });
  },
};

module.exports = confirmationEmail;
