/**
 * nodemailer.js / module pour les envois d'email
 */

/* Import */
const nodemailer = require("nodemailer");

/* Helper */

// TO DO voir quels parametres à utiliser pour l'envoi des mails
const sendMail = (email, message, subject) => {
  // options du transporteur
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io", // donne par gergory
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "4b37ebe2bf1d24", // donne par grégory
      pass: "a8d29e230efd4c", // donne par gregory
    },
  });

  // envoi du mail avec le transporteur defini
  transporter.sendMail(
    {
      from: '"Contact Cannes is Up" <no-reply@cannesisup.com>', //TO DO mettre l'adresse d'envoi
      to: email, // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body si envoi texte brut
      //html: "<b>Hello world html  !</b>", // html body avec backquote pour ecrire du code
    },
    (error, info) => {
      if (error) {
        return console.log(error);
      } else {
        return console.log(info);
      }
    }
  );
};

module.exports = sendMail;
