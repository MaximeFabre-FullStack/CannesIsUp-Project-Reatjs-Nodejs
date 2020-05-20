const express = require("express");
const router = express.Router();
const creationAdherent = require("../controllers/creationAdherent");
const upload = require("../middleware/uploadConfig");
const signIn = require("../controllers/signIn");
const confirmationEmail = require("../controllers/confirmationEmail");

/* GET /adherents */
router.post("/", upload, creationAdherent); // testée sur Postman TO DO finaliser middleware upload

router.post("/signin", signIn); // Testée sur postman TODO crypter mdp

router.get("/signin/confirmation/:token", confirmationEmail.confirmation); // confirmation mail token

router.post("/signin/resend", confirmationEmail.resend); // resend confirmation mail token

module.exports = router;
