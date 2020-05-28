// REQ DE SUPPRESSION ADHERENT

const AdherentASupprimer = require("../models/adherent");
const fs = require("fs");
const path = require("path");

const AdherentSupprime = (req, res, next) => {
  const id = req.body._id;

  /* Suppression des fichiers */
  AdherentASupprimer.findOne({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).json((msg = "adherent non trouve"));
      return;
    }

    if (data.photoCouverture != "photocouv") {
      const filepath =
        path.join(__dirname, "../public/uploads/") + data.photoCouverture;

      fs.unlink(filepath, (err) => {
        if (err) throw err;
        console.log("file deleted");
      });
    }

    if (data.dossierPresentation != "pdf") {
      const filepath =
        path.join(__dirname, "../public/uploads/") + data.dossierPresentation;

      fs.unlink(filepath, (err) => {
        if (err) throw err;
        console.log("file deleted");
      });
    }

    if (data.dirigeant.photoPortrait != "photoportrait") {
      const filepath =
        path.join(__dirname, "../public/uploads/") +
        data.dirigeant.photoPortrait;

      fs.unlink(filepath, (err) => {
        if (err) throw err;
        console.log("file deleted");
      });
    }

    if (data.logo != "logo") {
      const filepath = path.join(__dirname, "../public/uploads/") + data.logo;

      fs.unlink(filepath, (err) => {
        if (err) throw err;
        console.log("file deleted");
      });
    }
  });

  AdherentASupprimer.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).json((success = false));
      return;
    }
    res.json(data);
  });
};

module.exports = AdherentSupprime;
