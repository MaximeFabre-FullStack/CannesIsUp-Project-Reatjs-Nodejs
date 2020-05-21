const express = require("express");
const router = express.Router();
const affichageAnnuaire = require("../controllers/affichageAnnuaire");
const infosAdherent = require("../controllers/affichageAdherent");
const sendMail = require("../helper/sendmail");

/* GET home page. */
router.get("/", affichageAnnuaire); // route OK

router.post("/adherent", infosAdherent); // route OK

module.exports = router;
