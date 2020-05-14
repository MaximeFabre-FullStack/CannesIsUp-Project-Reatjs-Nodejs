/**
 * controller to get post history
 */
const creationFiches = require("../models/adherent");

const toutAdherents = (req, res, next) => {
  console.log(req.body.form.email);

  const nouvelAdherent = new creationFiches({
    nomDeSociete: req.body.form.nom,
    mailPrive: req.body.form.email,
    motDePasse: req.body.form.password,

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

    paiement: "", // a modifier
    estActif: false,

    /*mailPrive: req.body.email,
    motDePasse: req.body.password,

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
    //logo: req.body.logo, // a modifier
    //photoCouverture: req.body.photoCouverture, // a modifier
    //dossierPresentation: req.body.dossierPresentation, // a modifier

    dirigeant: {
      nom: req.body.nomDirigeant,
      prenom: req.body.prenomDirigeant,
      paroleDeMembre: req.body.parole,
      fonction: req.body.fonction,
      // photoPortrait: req.body.photoPortrait, // a modifier
    },

    //paiement: req.body.paiement, // a modifier
    estActif: false,*/
  });

  nouvelAdherent.save({}, (err, data) => {
    if (err) {
      res.status(500).json(((success = false), "message erreur"));
      console.log("message erreur");
      return;
    }
    if (!data) {
      res.status(500).json(((success = false), "no data send"));
      console.log("no data");
      return;
    }
    if (data) {
      res.json((success = false));
    }
  });
};

module.exports = toutAdherents;
