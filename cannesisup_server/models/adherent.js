const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator"); TODO A ACTIVER

const adherentSchema = mongoose.Schema({
  nomDeSociete: String,
  logo: String,
  descriptionExhaustive: String,
  secteurDactivite: String,
  mailPrive: { type: String, unique: true },
  motDePasse: String,

  dirigeant: {
    nom: String,
    prenom: String,
    paroleDeMembre: String,
  },

  coordonnes: {
    adresse: String,
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

  estActif: { type: Boolean, default: false },

  pdf: String,
});

/* avec unique verifie que 2 utilisateurs n'ont pas la même adresse mail */

// userSchema.plugin(uniqueValidator); TODO A ACTIVER

/* Model */
const Adherent = mongoose.model("Adherent", adherentSchema);

module.exports = Adherent;
