/**
 * controller to get post history
 */

/* Imports */
const creationFiches = require("../models/adherent");
const bcrypt = require("bcrypt");

/* Controller */
const toutAdherents = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const nouvelAdherent = new creationFiches({
      nomDeSociete: req.body.nom,
      mailPrive: req.body.email,
      motDePasse: hash,

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

      paiement: req.body.paiement,
      estActif: false,
      estAdmin: false,
    });

    nouvelAdherent.save({}, (err) => {
      if (err) {
        res.status(500).json({ success: false, message: "erreur 500" });
        console.log(err);
        return;
      }
      res.json({ success: true });
    });
  });
};

module.exports = toutAdherents;
