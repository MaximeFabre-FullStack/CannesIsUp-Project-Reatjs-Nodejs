const express = require("express");
const router = express.Router();
const creationAdherent = require("../controllers/creationAdherent");
const upload = require("../middleware/uploadConfig");
const signIn = require("../controllers/signIn");
const confirmationEmail = require("../controllers/confirmationEmail");

/* POST /adherents - envoi du formulaire et du mail de confirmation */
router.post("/", upload, creationAdherent); // OK

/* POST /adherents/signin - login vers back-office */
router.post("/signin", signIn);

/* GET /adherents/signin/confirmation/ - email de confirmation*/
router.get(
  "/signin/confirmation/:token/:email",
  confirmationEmail.confirmation
);

/* POST /adherents/signin/resend - Renvoi du mail de confirmation */
router.post("/signin/resend", confirmationEmail.resend); // TODO a raccorder au front !

module.exports = router;
