// REQ CREATION ADHERENT

const Adherent = require("../models/adherent");
const Token = require("../models/confirmationToken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const sendEmail = require("../helper/sendmail");

const newAdherent = (req, res, next) => {
  // CHECK SI ADHERENT EXISTE DEJA VIA MAIL PUIS SI OUI CONTINUE
  Adherent.findOne({ mailPrive: req.body.email }).then((adherents) => {
    if (adherents) {
      return res.status(400).json({
        msg: "L'email que vous avez entré est déjà associé à un compte",
        success: false,
      });
    }

    // HASH MOT DE PASSE PUIS CREATION ADHERENT
    bcrypt.hash(req.body.password, 10).then((hash) => {
      nouvelAdherent = new Adherent({
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
        estVerifie: false,
      });

      nouvelAdherent.save((err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            msg: err.message,
          });
        }

        /* Création du token de verification */

        var token = new Token({
          _userId: nouvelAdherent._id,
          token: crypto.randomBytes(16).toString("hex"),
        });

        token.save((err) => {
          if (err) {
            return res.status(500).json({
              success: false,
              msg: err.message,
            });
          }

          // PARAMETRES POUR ENVOI DE MAIL DE CONFIRMATION
          const email = nouvelAdherent.mailPrive;
          const message =
            "Hello," +
            nouvelAdherent.dirigeant.prenom +
            " " +
            nouvelAdherent.dirigeant.nom +
            "! Merci de votre enregistrement sur Cannes is Up! Merci de verifier votre adresse mail: http://" +
            req.headers.host +
            "/confirmation/" +
            token.token +
            ".";
          const subject = "Confirmation de demande d'adhésion à Cannes Is Up";

          // APPEL DU HELPER
          sendEmail(email, message, subject);
          res.json({ success: true });
        });
      });
    });
  });
};

module.exports = newAdherent;
