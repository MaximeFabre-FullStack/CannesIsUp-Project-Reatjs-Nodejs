const Token = require("../models/confirmationToken");
const Adherent = require("../models/adherent");

const confirmationEmail = {
  confirmation: (req, res, next) => {
    Token.findOne({ token: req.params.token }, (err, token) => {
      if (!token)
        return res.status(400).json({
          type: "not-verified",
          msg:
            "We were unable to find a valid token. Your token my have expired.",
        });

      // If we found a token, update the matching user
      Adherent.updateOne(
        { _id: token._userId },
        { estVerifie: true },
        (err, adherents) => {
          if (!adherents) {
            res
              .status(400)
              .json({ msg: "We were unable to find a user for this token." });
            return;
          }
        }
      );
    });
  },
  resend: (req, res, next) => {
    res.send("ok");
  },
};

module.exports = confirmationEmail;
