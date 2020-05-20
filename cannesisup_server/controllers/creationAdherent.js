/**
 * controller to get post history
 */

/* Imports */
const Adherent = require("../models/adherent");
const Token = require("../models/confirmationToken");
const bcrypt = require("bcrypt");
const sendEmail = require("../helper/sendmail");

/* Controller */
const newAdherent = (req, res, next) => {
  /* check si adherent existe deja */
  Adherent.findOne({ mailPrive: req.body.email }, (adherent, err) => {
    if (adherent)
      return res.status(400).send({
        msg: "L'email que vous avez entré est déjà associé à un compte",
      });

    /* création du nouvel adherent */
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

      nouvelAdherent.save({}, (err) => {
        if (err) {
          res.status(500).json({ success: false, message: "erreur 500" });
          console.log(err);
          return;
        }

        console.log(nouvelAdherent);
        /* Création du token de verification */

        var token = new Token({
          _userId: nouvelAdherent._id,
          token: "123456" /*crypto.randomBytes(16).toString('hex')*/,
        });

        token.save(function (err) {
          if (err) {
            return res.status(500).send({ msg: err.message });
          }

          /* Parametres du mail */
          const email = nouvelAdherent.mailPrive;
          const message =
            "Hello," +
            "Please verify your account by clicking the link: http://" +
            req.headers.host +
            "/confirmation/" +
            token.token +
            ".";
          const subject = "Confirmation de demande d'adhésion à Cannes Is Up";
          const infoMessage =
            "A verification email has been sent to " + email + ".";

          /* Appel du helper */
          sendEmail(email, message, subject);
        });
      });
    });
  });
  res.send({ success: true });
};

module.exports = newAdherent;
