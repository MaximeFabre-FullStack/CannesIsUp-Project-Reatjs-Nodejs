const express = require("express");
const router = express.Router();
const infosAdherentAdmin = require("../controllers/affichageAdherentAdmin");
const suppressionAdherent = require("../controllers/suppressionAdherent");
const statusTrue = require("../controllers/modifStatusTrue");
const statusFalse = require("../controllers/modifStatusFalse");

/* GET home page. */
router.get("/", infosAdherentAdmin); // test ok front back

router.delete("/delete", suppressionAdherent); // test sur Postman ok

router.put("/status/true", statusTrue);

router.put("/status/false", statusFalse);

module.exports = router;
