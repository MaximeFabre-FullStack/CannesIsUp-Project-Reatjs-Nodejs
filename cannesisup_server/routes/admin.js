const express = require("express");
const router = express.Router();
const infosAdherentAdmin = require("../controllers/affichageAdherentAdmin");

/* GET home page. */
router.get("/", infosAdherentAdmin);

module.exports = router;
