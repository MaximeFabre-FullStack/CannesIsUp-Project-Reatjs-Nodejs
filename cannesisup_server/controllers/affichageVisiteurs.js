/**
 * controller to get post history
 */
const Fiches = require("../models/adherent");

const toutAdherents = (req, res, next) => {
  Fiches.find({}, (err, data) => {
    if (err) {
      res.status(500).json((success = false));
      return;
    }
    res.json(data);
  });
};

module.exports = toutAdherents;
