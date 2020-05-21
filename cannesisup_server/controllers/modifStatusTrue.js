const tableauAdmin = require("../models/adherent");

const modifStatusTrue = (req, res, next) => {
  tableauAdmin.findOneAndUpdate(
    { _id: req.body.data._id },
    { estActif: true },
    (err, data) => {
      if (err) {
        res.status(500).json({ updated: false });
        return;
      }
      res.json({ data, updated: true });
    }
  );
};

module.exports = modifStatusTrue;
