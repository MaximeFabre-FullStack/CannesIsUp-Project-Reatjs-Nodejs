const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator"); TODO A ACTIVER

const adherentSchema = mongoose.Schema({
  nomDeSociete: String,
  mailPrive: String,
  motDePasse: String,

  coordonnes: {
    adresse: String,
    complementDadresse: String,
    codePostal: String,
    mailSociete: String,
    telephone: String,
    siteWeb: String,
  },

  reseauSociaux: {
    facebook: String,
    instagram: String,
    twitter: String,
    linkedin: String,
  },

  secteurDactivite: String,
  descriptionExhaustive: String,
  logo: String,
  photoCouverture: String,
  dossierPresentation: String,

  dirigeant: {
    nom: String,
    prenom: String,
    paroleDeMembre: String,
    fonction: String,
    photoPortrait: String,
  },

  pdf: String,
  estActif: { type: Boolean, default: false },
});

/* avec unique verifie que 2 utilisateurs n'ont pas la même adresse mail */

// userSchema.plugin(uniqueValidator); TODO A ACTIVER

/* Model */
const Adherent = mongoose.model("Adherent", adherentSchema);

module.exports = Adherent;
