const express = require("express");
const router = express.Router();

const infosAdherentAdmin = require("../controllers/affichageAdherentAdmin");
const suppressionAdherent = require("../controllers/suppressionAdherent");
const statusTrue = require("../controllers/modifStatusTrue");
const statusFalse = require("../controllers/modifStatusFalse");
const modifAdherent = require("../controllers/modifAdherent");
const upload = require("../middleware/uploadConfig");

// REQ GET ANNUAIRE ADMIN
router.get("/", infosAdherentAdmin);

// REQ DELETE ADHERENT VIA ID
router.delete("/delete", suppressionAdherent);

// REQ PUT MODIF STATUS ADHERENT => TRUE
router.put("/status/true", statusTrue);

// REQ PUT MODIF STATUS ADHERENT => FALSE
router.put("/status/false", statusFalse);

//REQ PUT MODIF TEXTE FICHE ADHERENT
router.put("/modifier/adherent", modifAdherent.input);

//REQ PUT MODIF FILES FICHE ADHERENT
router.put("/modifier/adherent/file", upload, modifAdherent.file);

module.exports = router;
