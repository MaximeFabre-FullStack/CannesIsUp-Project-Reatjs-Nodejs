/**
 * controller to get post history
 */
const creationFiches = require("../models/adherent");

const toutAdherents = (req, res, next) => {
  const nouvelAdherent = new creationFiches({
    nomDeSociete: req.body.nom,
    mailPrive: req.body.email,
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
    logo: req.body.logo, // a modifier
    photoCouverture: req.body.photoCouverture, // a modifier
    dossierPresentation: req.body.dossierPresentation, // a modifier

    dirigeant: {
      nom: req.body.nomDirigeant,
      prenom: req.body.prenomDirigeant,
      paroleDeMembre: req.body.parole,
      fonction: req.body.fonction,
      photoPortrait: req.body.photoPortrait, // a modifier
    },

    paiement: req.body.paiement, // a modifier
    estActif: false,
  });
  nouvelAdherent.save({}, (err, data) => {
    if (err) {
      res.status(500).json((success = false));
      return;
    }
    if (!data) {
      res.status(500).json(((sucess = false), "no data send"));
      return;
    }
    if (data) {
      res.json((sucess = true));
    }
  });
};

module.exports = toutAdherents;
