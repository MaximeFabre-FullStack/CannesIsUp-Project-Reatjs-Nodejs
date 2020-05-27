const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const adherentSchema = mongoose.Schema({
  nomDeSociete: String,
  mailPrive: { type: String, required: true, unique: true },
  motDePasse: String,

  coordonnes: {
    adresse: String,
    complementDadresse: String,
    codePostal: String,
    ville: String,
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

  paiement: String,
  estActif: { type: Boolean, default: false },
  estAdmin: { type: Boolean, default: false },
  estVerifie: { type: Boolean, default: false },
});

/* avec unique verifie que 2 utilisateurs n'ont pas la même adresse mail */
adherentSchema.plugin(uniqueValidator);

/* Model */
const Adherent = mongoose.model("Adherent", adherentSchema);

module.exports = Adherent;
