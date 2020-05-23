const Adherent = require("../models/adherent");
const fs = require("fs");
const path = require("path");

const updateAdherent = (req, res, next) => {
  Adherent.findOne({ _id: req.params.id }, (err, adherent) => {
    if (!adherent) {
      res.status(400).json({ msg: "no adherent in DDB" });
    }

    /* Suppression de l'ancien fichier */
    if (adherent.photoCouverture) {
      const filepath =
        path.join(__dirname, "../public/uploads/") + adherent.photoCouverture;

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
  });

  /*if (req.files.couv) {
    Adherent.findOneAndUpdate(
      { _id: req.params.id },
      { photoCouverture: req.files.couv[0].filename }
    )
      .then(() => res.status(200).json({ message: "Objet modifié !" }))
      .catch((error) => res.status(400).json({ error }));
  } else if (req.files.logo) {
    Adherent.findOneAndUpdate(
      { _id: req.params.id },
      { logo: req.files.logo[0].filename }
    )
      .then(() => res.status(200).json({ message: "Objet modifié !" }))
      .catch((error) => res.status(400).json({ error }));
  } else if (req.files.dossier) {
    Adherent.findOneAndUpdate(
      { _id: req.params.id },
      { dossierPresentation: req.files.dossier[0].filename }
    )
      .then(() => res.status(200).json({ message: "Objet modifié !" }))
      .catch((error) => res.status(400).json({ error }));
  } else if (req.files.photoPortrait) {
    Adherent.findOneAndUpdate(
      { _id: req.params.id },
      { photoPortrait: req.files.photoPortrait[0].filename }
    )
      .then(() => res.status(200).json({ message: "Objet modifié !" }))
      .catch((error) => res.status(400).json({ error }));
  }*/
};

module.exports = updateAdherent;
