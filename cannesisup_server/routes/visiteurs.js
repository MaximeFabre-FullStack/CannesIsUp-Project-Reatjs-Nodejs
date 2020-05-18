const express = require("express");
const router = express.Router();
const affichageAnnuaire = require("../controllers/affichageAnnuaire");
const infosAdherent = require("../controllers/affichageAdherent");

/* GET home page. */
router.get("/", affichageAnnuaire); // route OK

router.post("/adherent", infosAdherent); // route a tester

module.exports = router;
