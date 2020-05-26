const express = require("express");
const router = express.Router();

const affichageAnnuaire = require("../controllers/affichageAnnuaire");
const infosAdherent = require("../controllers/affichageAdherent");

// GET /visiteurs - Affichage annuaire
router.get("/", affichageAnnuaire);

// GET /visiteurs/adherent - Affichage adherent
router.post("/adherent", infosAdherent);

module.exports = router;
