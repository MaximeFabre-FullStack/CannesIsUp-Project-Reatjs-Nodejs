/**
 * controller to get adherent details
 */

const Adherent = require("../models/adherent");

const infosAdherent = (req, res, next) => {
  const id = req.body.id;
  // TODO exclure mdp et mail prive
  Adherent.findById(id, (err, data) => {
    if (err) {
      res.status(500).json((success = false));
      return;
    }
    res.json(data);
  });
};

module.exports = infosAdherent;
