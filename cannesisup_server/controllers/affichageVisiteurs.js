/**
 * controller to get adherent history
 */

const Fiches = require("../models/adherent");

const toutAdherents = (req, res, next) => {
  // TODO exclure mdp et mail prive
  Fiches.find({}, (err, data) => {
    if (err) {
      res.status(500).json((success = false));
      return;
    }
    res.json(data);
  });
};

module.exports = toutAdherents;
