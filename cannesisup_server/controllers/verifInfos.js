/**
 * controller to get adherent mail/mdp
 */
const MdpMail = require("../models/adherent");

const toutAdherents = (req, res, next) => {
  //TODO CRYPTER MDP
  console.log(body);
  MdpMail.findOne(
    { mailPrive: req.body.emailSignIn, motDePasse: req.body.motDePasseSignIn },
    (err, data) => {
      if (err) {
        res.status(500).json((success = false));
        return;
      }
      if (!data) {
        res.status(500).json((exist = false));
        return;
      }

      res.json((exist = true));
    }
  );
};

module.exports = toutAdherents;
