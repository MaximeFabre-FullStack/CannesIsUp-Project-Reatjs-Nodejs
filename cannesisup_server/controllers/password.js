const sendEmail = require("../helper/sendmail");
const url = require("../url.json");
const bcrypt = require("bcrypt");

const Adherent = require("../models/adherent");

const password = {
  reset: (req, res, next) => {
    /* Envoi du mail adherent */
    const email = req.body.email;
    const subject = "Cannes Is Up - Réinitialisation du mot de passe";
    const url = `http://localhost:3000/newpassword/${req.body.email}`;
    const htmlMessage = `<p>Bonjour,</p><br/><br/>
                  <p> Veuillez cliquer sur le lien ci-dessous pou définir un nouveau mot de passe</p><br/>
                  <a href="${url}"> ${url} </a>`;

    sendEmail(email, htmlMessage, subject);
    res.json({
      success: true,
      msg: "un email de vérification a été envoyé à:" + email,
    });
  },

  newPassword: (req, res, next) => {
    // CHECK SI ADHERENT EXISTE DEJA VIA MAIL PUIS SI OUI CONTINUE
    Adherent.findOne({ mailPrive: req.body.email }).then((adherents) => {
      if (!adherents) {
        res.status(400).json({
          msg: "aucune adresse email ne correspond à cet utilisateur",
          success: false,
        });
        return;
      } else {
        // CHANGEMENT DU MOT DE PASSE
        bcrypt.hash(req.body.password, 10).then((hash) => {
          Adherent.findOneAndUpdate(
            { mailPrive: req.body.email },
            { motDePasse: hash },
            (err) => {
              if (err) {
                res.json(err);
              }
              res.json({ success: true });
            }
          );
        });
      }
    });
  },
};
module.exports = password;
