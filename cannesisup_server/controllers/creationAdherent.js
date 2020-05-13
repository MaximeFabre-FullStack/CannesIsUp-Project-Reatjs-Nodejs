/**
 * controller to get post history
 */
const creationFiches = require("../models/adherent");

const toutAdherents = (req, res, next) => {
  const nouvelAdherent = new creationFiches({
    nomDeSociete: req.body.nomDeSociete,
    mailPrive: req.body.mailPrive,
    motDePasse: req.body.motDePasse,

    coordonnes: {
      adresse: req.body.coordonnes.adresse,
      complementDadresse: req.body.coordonnes.complementDadresse,
      codePostal: req.body.coordonnes.codePostal,
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
    logo: req.body.logo,
    photoCouverture: req.body.photoCouverture,
    dossierPresentation: req.body.dossierPresentation,

    dirigeant: {
      nom: req.body.dirigeant.nom,
      prenom: req.body.dirigeant.prenom,
      paroleDeMembre: req.body.dirigeant.paroleDeMembre,
      fonction: req.body.dirigeant.fonction,
      photoPortrait: req.body.dirigeant.photoPortrait,
    },

    pdf: req.body.pdf,
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
