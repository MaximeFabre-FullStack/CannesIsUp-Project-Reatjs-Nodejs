const express = require("express");
const router = express.Router();
const infosAdherentAdmin = require("../controllers/affichageAdherentAdmin");
const suppressionAdherent = require("../controllers/suppressionAdherent");
const statusTrue = require("../controllers/modifStatusTrue");
const statusFalse = require("../controllers/modifStatusFalse");
const modifAdherent = require("../controllers/modifAdherent");

router.get("/", infosAdherentAdmin); // REQ GET ANNUAIRE ADMIN

router.delete("/delete", suppressionAdherent); // REQ DELETE ADHERENT VIA ID

router.put("/status/true", statusTrue); // REQ PUT MODIF STATUS ADHERENT => TRUE

router.put("/status/false", statusFalse); // REQ PUT MODIF STATUS ADHERENT => FALSE

// router.put("/modifier/adherent", modifAdherent) // reste a modifier le controller

module.exports = router;
