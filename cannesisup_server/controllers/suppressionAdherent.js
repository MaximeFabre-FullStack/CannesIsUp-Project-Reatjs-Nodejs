/* 
Test sur postman ok 
*/
const AdherentASupprimer = require("../models/adherent");

const AdherentSupprime = (req, res, next) => {
  console.log(req.body);
  const id = req.body._id;

  AdherentASupprimer.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).json((success = false));
      return;
    }
    res.json(data);
  });
};

module.exports = AdherentSupprime;
