const express = require("express");
const router = express.Router();
const affichageAnnuaire = require("../controllers/affichageAnnuaire");
const infosAdherent = require("../controllers/affichageAdherent");
const sendMail = require("../helper/sendmail");

/* GET home page. */
router.get("/", affichageAnnuaire); // route OK

router.post("/adherent", infosAdherent); // route OK

router.post("/mail", sendMail, (req, res) => {
  res.send("mail envoyé");
}); // route test mail

module.exports = router;
