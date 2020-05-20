const express = require("express");
const router = express.Router();
const infosAdherentAdmin = require("../controllers/affichageAdherentAdmin");
const suppressionAdherent = require("../controllers/suppressionAdherent");

/* GET home page. */
router.get("/", infosAdherentAdmin); // test ok front back

router.delete("/delete", suppressionAdherent); // test sur Postman ok

module.exports = router;
