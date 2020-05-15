/**
 * controller to get post history
 */

/* Imports */
const creationFiches = require("../models/adherent");
const bcrypt = require("bcrypt");

/* Controller */
const toutAdherents = (req, res, next) => {
  bcrypt.hash(req.body.form.password, 10).then((hash) => {
    const nouvelAdherent = new creationFiches({
      nomDeSociete: req.body.form.nom,
      mailPrive: req.body.form.email,
      motDePasse: hash,

      coordonnes: {
        adresse: req.body.form.adresse,
        complementDadresse: req.body.form.adresse2,
        codePostal: req.body.form.code_postal,
        ville: req.body.form.ville,
        mailSociete: req.body.form.email_public,
        telephone: req.body.form.tel,
        siteWeb: req.body.form.site,
      },

      reseauSociaux: {
        facebook: req.body.form.facebook,
        instagram: req.body.form.instagram,
        twitter: req.body.form.twitter,
        linkedin: req.body.form.linkedin,
      },

      secteurDactivite: req.body.form.activite,
      descriptionExhaustive: req.body.form.description,

      logo: "", // a modifier
      photoCouverture: "", // a modifier
      dossierPresentation: "", // a modifier

      dirigeant: {
        nom: req.body.form.nomDirigeant,
        prenom: req.body.form.prenomDirigeant,
        paroleDeMembre: req.body.form.parole,
        fonction: req.body.form.fonction,
        photoPortrait: req.body.form.photoPortrait, // a modifier
      },

      paiement: req.body.form.paiement, // a modifier
      estActif: false,
    });

    nouvelAdherent.save({}, (err, data) => {
      if (err) {
        res.status(500).json(((success = false), "message erreur"));
        return;
      }
      if (!data) {
        res.status(500).json(((success = false), "no data send"));
        return;
      }
      if (data) {
        res.json((success = true));
      }
    });
  });
};

module.exports = toutAdherents;
