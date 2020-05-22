// REQ CONNEXION / CREATION TOKEN / COMPARAISON MOT DE PASSE
const MdpMail = require("../models/adherent");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signIn = (req, res, next) => {
  MdpMail.findOne({ mailPrive: req.body.emailSignIn }).then((adherents) => {
    if (!adherents) {
      return res.status(401).json({ error: "Utilisateur non trouvé !" });
    }
    // QUAND UTILISATEUR TROUVE COMPARAISON MOT DE PASSE
    bcrypt
      .compare(req.body.motDePasseSignIn, adherents.motDePasse)
      .then((valid, err) => {
        if (!valid) {
          return res
            .status(401)
            .json({ error: "Mot de passe incorrect !", exist: false });
        }
        if (!adherents.estVerifie) {
          return res
            .status(401)
            .json({ error: "Utilisateur non vérifié !", exist: false });
        }
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(200).json({
          exist: true,
          admin: adherents.estAdmin,
          userId: adherents._id,
          token: jwt.sign({ userId: adherents._id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          }),
        });
      });
  });
};

module.exports = signIn;
