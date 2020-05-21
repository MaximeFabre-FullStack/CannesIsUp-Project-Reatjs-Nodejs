// REQ MODIF STATUS ADHERENT A FALSE

const tableauAdmin = require("../models/adherent");

const modifStatusFalse = (req, res, next) => {
  console.log(req.body.data._id);
  tableauAdmin.findOneAndUpdate(
    { _id: req.body.data._id },
    { estActif: false },
    (err, data) => {
      if (err) {
        res.status(500).json({ updated: false });
        return;
      }
      res.json({ data, updated: true });
    }
  );
};

module.exports = modifStatusFalse;
