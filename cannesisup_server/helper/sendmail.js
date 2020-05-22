/**
 * nodemailer.js / module pour les envois d'email
 */

/* Import */
const nodemailer = require("nodemailer");
const mailAccount = require("../mail-account.json");

/* Helper */
const sendMail = async (email, htmlMessage, subject) => {
  // options du transporteur a modifier dans mail-account.json
  let transporter = nodemailer.createTransport({
    host: mailAccount.host,
    port: mailAccount.port,
    secure: mailAccount.secure,
    auth: {
      user: mailAccount.auth.user,
      pass: mailAccount.auth.pass,
    },
  });

  // envoi du mail avec le transporteur defini
  return await transporter.sendMail({
    from: '"Contact Cannes is Up" <no-reply@cannesisup.com>', //TO DO mettre l'adresse d'envoi
    to: email,
    subject: subject,
    html: htmlMessage,
  });
};

module.exports = sendMail;
