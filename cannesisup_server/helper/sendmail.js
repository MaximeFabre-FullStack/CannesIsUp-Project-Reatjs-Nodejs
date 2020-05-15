/**
 * nodemailer.js / module pour les envois d'email
 */

/* Import */
const nodemailer = require("nodemailer");

/* Helper */

// TO DO voir quels parametres à utiliser pour l'envoi des mails
const sendMail = (email, subject) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ovh001.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "utilisateur cannes is up", // donne par grégory
      pass: "mot de passe", // generated ethereal password
    },
  });

  // send mail with defined transport object
  transporter
    .sendMail({
      from: '"Contact Cannes is Up" <foo@example.com>', //TO DO mettre l'adresse d'envoi
      to: email, // list of receivers
      subject: subject, // Subject line
      text: "Hello world?", // plain text body si envoi texte brut
      html: "<b>Hello world?</b>", // html body avec backquote pour ecrire du code
    })
    .then(
      (info) => {
        if (info.messageID) {
          //OK
        }
        //pas OK
      },
      (error) => {
        //pas ok
      }
    );
};

module.exports = sendMail;
