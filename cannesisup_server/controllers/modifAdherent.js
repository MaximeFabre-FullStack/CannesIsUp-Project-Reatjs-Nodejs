// REQ DE MODIF D'ADHERENT /!\ A FINIR ROUTES / AJOUT ENVOIE MAIL ADMIN/ADHERENT / FRONT
const tableauAdmin = require("../models/adherent");

const modifAdherent = (req, res, next) => {
  tableauAdmin.findOneAndUpdate(
    { _id: req.body.data._id },
    {
      nomDeSociete: req.body.nom,

      coordonnes: {
        adresse: req.body.adresse,
        complementDadresse: req.body.adresse2,
        codePostal: req.body.code_postal,
        ville: req.body.ville,
        mailSociete: req.body.email_public,
        telephone: req.body.tel,
        siteWeb: req.body.site,
      },

      reseauSociaux: {
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        twitter: req.body.twitter,
        linkedin: req.body.linkedin,
      },

      secteurDactivite: req.body.activite,
      descriptionExhaustive: req.body.description,

      logo: req.files.logo ? req.files.logo[0].filename : null,
      photoCouverture: req.files.couv ? req.files.couv[0].filename : null,
      dossierPresentation: req.files.dossier
        ? req.files.dossier[0].filename
        : null,

      dirigeant: {
        nom: req.body.nomDirigeant,
        prenom: req.body.prenomDirigeant,
        paroleDeMembre: req.body.parole,
        fonction: req.body.fonction,
        photoPortrait: req.files.photoPortrait
          ? req.files.photoPortrait[0].filename
          : null,
      },
    },
    (err, data) => {
      if (err) {
        res.status(500).json({ updated: false });
        return;
      }
      res.json({ data, updated: true });
    }
  );
};

module.exports = modifAdherent;
