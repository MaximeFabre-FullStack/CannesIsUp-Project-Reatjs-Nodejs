/**
 * controller to get adherent mail/mdp
 */
const MdpMail = require("../models/adherent");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signIn = (req, res, next) => {
  //TODO CRYPTER MDP
  MdpMail.findOne({ mailPrive: req.body.emailSignIn, estAdmin: 1 }).then(
    (adherents) => {
      if (!adherents) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      /* quand utilisateur trouvé comparaison password */
      bcrypt
        .compare(req.body.motDePasseSignIn, adherents.motDePasse)
        .then((valid, err) => {
          if (!valid) {
            return res
              .status(401)
              .json({ error: "Mot de passe incorrect !", exist: false });
          }
          if (err) {
            res.status(500).json((success = false));
            return;
          }
          res.status(200).json({
            userId: adherents._id,
            token: jwt.sign({ userId: adherents._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        });
    }
  );
};

module.exports = signIn;
