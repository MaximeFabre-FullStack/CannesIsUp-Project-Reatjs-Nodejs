/**
 * controller to get adherent history
 */

const Fiches = require("../models/adherent");

const affichageAnnuaire = (req, res, next) => {
  // TODO exclure mdp et mail prive
  Fiches.find({ estActif: true }, (err, data) => {
    if (err) {
      res.status(500).json((success = false));
      return;
    }
    res.json(data);
  });
};

module.exports = affichageAnnuaire;
