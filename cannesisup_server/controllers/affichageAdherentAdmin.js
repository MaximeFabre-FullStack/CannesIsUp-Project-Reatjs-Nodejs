const tableauAdmin = require("../models/adherent");

const affichageAnnuaireAdmin = (req, res, next) => {
  // TODO exclure mdp et mail prive
  tableauAdmin.find({}, (err, data) => {
    if (err) {
      res.status(500).json((success = false));
      return;
    }
    res.json(data);
  });
};

module.exports = affichageAnnuaireAdmin;
