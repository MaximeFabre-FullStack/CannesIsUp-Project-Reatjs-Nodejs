const Adherent = require("../models/adherent");
const fs = require("fs");
const path = require("path");

const updateAdherent = {
  file: (req, res, next) => {
    Adherent.findOne({ _id: req.params.id }, (err, adherent) => {
      if (!adherent) {
        res.status(400).json({ msg: "no adherent in DDB" });
      }

      /* requete changement photo de couverture */
      if (req.files.couv) {
        /* Suppression de l'ancien fichier */
        if (adherent.photoCouverture) {
          const filepath =
            path.join(__dirname, "../public/uploads/") +
            adherent.photoCouverture;

          fs.unlink(filepath, (err) => {
            if (err) throw err;
            console.log("file deleted");
          });
        }

        /* Ajout nouveau fichier */
        Adherent.findOneAndUpdate(
          { _id: req.params.id },
          { photoCouverture: req.files.couv[0].filename }
        )
          .then(() => res.status(200).json({ message: "Objet modifié !" }))
          .catch((error) => res.status(400).json({ error }));
      }

      /* requete changement logo */
      if (req.files.logo) {
        /* Suppression de l'ancien fichier */
        if (adherent.logo) {
          const filepath =
            path.join(__dirname, "../public/uploads/") + adherent.logo;

          fs.unlink(filepath, (err) => {
            if (err) throw err;
            console.log("file deleted");
          });
        }

        /* Ajout nouveau fichier */
        Adherent.findOneAndUpdate(
          { _id: req.params.id },
          { logo: req.files.logo[0].filename }
        )
          .then(() => res.status(200).json({ message: "Objet modifié !" }))
          .catch((error) => res.status(400).json({ error }));
      }

      /* requete changement photo de profil */
      if (req.files.photoPortrait) {
        /* Suppression de l'ancien fichier */
        if (adherent.dirigeant.photoPortrait) {
          const filepath =
            path.join(__dirname, "../public/uploads/") +
            adherent.dirigeant.photoPortrait;

          fs.unlink(filepath, (err) => {
            if (err) throw err;
            console.log("file deleted");
          });
        }

        /* Ajout nouveau fichier */
        Adherent.findOneAndUpdate(
          { _id: req.params.id },
          { "dirigeant.photoPortrait": req.files.photoPortrait[0].filename }
        )
          .then(() => res.status(200).json({ message: "Objet modifié !" }))
          .catch((error) => res.status(400).json({ error }));
      }

      /* requete changement dossier présentation */
      if (req.files.dossier) {
        /* Suppression de l'ancien fichier */
        if (adherent.dossierPresentation) {
          const filepath =
            path.join(__dirname, "../public/uploads/") +
            adherent.dossierPresentation;

          fs.unlink(filepath, (err) => {
            if (err) throw err;
            console.log("file deleted");
          });
        }

        /* Ajout nouveau fichier */
        Adherent.findOneAndUpdate(
          { _id: req.params.id },
          { dossierPresentation: req.files.dossier[0].filename }
        )
          .then(() => res.status(200).json({ message: "Objet modifié !" }))
          .catch((error) => res.status(400).json({ error }));
      }
    });
  },
  input: (req, res, next) => {
    console.log(req.body._id);
    Adherent.findOneAndUpdate(
      { _id: req.body._id },
      { nomDeSociete: req.body.nomDeSociete },
      (err, adherent) => {
        if (!adherent) {
          res.status(400).json({ msg: "no adherent in DDB" });
        }
        if (err) {
          res.status(400).json(error);
        } else {
          res.status(200).res.json(adherent);
        }
      }
    );
  },
};
module.exports = updateAdherent;
