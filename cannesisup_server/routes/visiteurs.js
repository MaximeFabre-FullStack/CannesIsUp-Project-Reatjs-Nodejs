const express = require("express");
const router = express.Router();
const affichageAnnuaire = require("../controllers/affichageAnnuaire");
const infosAdherent = require("../controllers/affichageAdherent");
const downloadPDF = require("../controllers/downloadPDF");

/* GET home page. */
router.get("/", affichageAnnuaire); // route OK

router.post("/adherent", infosAdherent); // route OK

router.post("/download", downloadPDF); // route a tester

module.exports = router;
