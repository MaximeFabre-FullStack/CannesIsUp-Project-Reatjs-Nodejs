const express = require("express");
const router = express.Router();
const creationAdherent = require("../controllers/creationAdherent");
const upload = require("../middleware/uploadConfig");
const verifInfos = require("../controllers/verifInfos");

/* GET /adherents */
router.post("/", upload, creationAdherent); // testée sur Postman TO DO finaliser middleware upload

router.post("/signin", verifInfos); // Testée sur postman TODO crypter mdp

module.exports = router;
