const express = require("express");
const router = express.Router();
const creationAdherent = require("../controllers/creationAdherent");
const verifInfos = require("../controllers/verifInfos");

router.post("/", creationAdherent); // testée sur Postman TODO crypter mdp

router.post("/signin", verifInfos); // Testée sur postman TODO crypter mdp

module.exports = router;
