const express = require("express");
const router = express.Router();
const creationAdherent = require("../controllers/creationAdherent");
const upload = require("../middleware/uploadConfig");
const signIn = require("../controllers/signIn");
const confirmationEmail = require("../controllers/confirmationEmail");

/* GET /adherents */
router.post("/", upload, creationAdherent); // OK

router.post("/signin", signIn); // OK

router.get("/signin/confirmation/:token", confirmationEmail.confirmation); // confirmation mail token

router.post("/signin/resend", confirmationEmail.resend); // resend confirmation mail token a raccorder au front !

module.exports = router;
