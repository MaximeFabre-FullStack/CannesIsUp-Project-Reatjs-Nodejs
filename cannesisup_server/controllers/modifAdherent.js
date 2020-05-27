// REQ DE MODIF D'ADHERENT /!\ A FINIR ROUTES / AJOUT ENVOIE MAIL ADMIN/ADHERENT / FRONT
const tableauAdmin = require("../models/adherent");
const fs = require("fs");
const path = require("path");

const modifAdherent = {
  // Modification des textes
  input: (req, res, next) => {
    tableauAdmin.findOneAndUpdate(
      { _id: req.body._id },
      {
        nomDeSociete: req.body.nomDeSociete,

        coordonnes: {
          adresse: req.body.coordonnes.adresse,
          complementDadresse: req.body.coordonnes.complementDadresse,
          codePostal: req.body.coordonnes.codePostal,
          ville: req.body.coordonnes.ville,
          mailSociete: req.body.coordonnes.mailSociete,
          telephone: req.body.coordonnes.telephone,
          siteWeb: req.body.coordonnes.siteWeb,
        },

        reseauSociaux: {
          facebook: req.body.reseauSociaux.facebook,
          instagram: req.body.reseauSociaux.instagram,
          twitter: req.body.reseauSociaux.twitter,
          linkedin: req.body.reseauSociaux.linkedin,
        },

        secteurDactivite: req.body.secteurDactivite,
        descriptionExhaustive: req.body.descriptionExhaustive,

        "dirigeant.nom": req.body.dirigeant.nom,
        "dirigeant.prenom": req.body.dirigeant.prenom,
        "dirigeant.paroleDeMembre": req.body.dirigeant.paroleDeMembre,
        "dirigeant.fonction": req.body.dirigeant.fonction,
      },
      (err, data) => {
        if (err) {
          res.status(500).json({ updated: false });
          return;
        }
        res.json({ data, updated: true });
      }
    );
  },

  // Modification de fichier
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
};

module.exports = modifAdherent;
