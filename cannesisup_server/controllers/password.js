const sendEmail = require("../helper/sendmail");
const url = require("../url.json");

const password = {
  reset: (req, res, next) => {
    /* Envoi du mail adherent */
    const email = req.body.email;
    const subject = "Cannes Is Up - Réinitialisation du mot de passe";
    const url = `http://localhost:3000/newpassword/${req.body.email}`;
    const htmlMessage = `<p>Bonjour,</p><br/><br/>
                  <p> Veuillez cliquer sur le lien ci-dessous pou définir un nouveau mot de passe</p><br/>
                  <a href="${url}"> ${url} </a>`;

    sendEmail(email, htmlMessage, subject);
    res.json({
      success: true,
      msg: "un email de vérification a été envoyé à:" + email,
    });
  },

  newPassword: (req, res, next) => {
    res.json({ success: true });
  },
};
module.exports = password;
