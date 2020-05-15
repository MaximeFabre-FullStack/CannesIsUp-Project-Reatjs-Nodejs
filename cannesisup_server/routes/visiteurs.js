const express = require("express");
const router = express.Router();
const affichageAnnuaire = require("../controllers/affichageAnnuaire");

/* GET home page. */
router.get("/", affichageAnnuaire); // route OK

module.exports = router;
