const express = require("express");
const router = express.Router();
const creationAdherent = require("../controllers/creationAdherent");
const upload = require("../middleware/uploadConfig");
const signIn = require("../controllers/signIn");

router.post("/", upload, creationAdherent); // REQ POST CREATION NOUVEL ADHERENT

router.post("/signin", signIn); // REQ POST SIGN

//router.post("/signin/confirmation", userController.confirmationPost); // confirmation mail token
//router.post("/signin/resend", userController.resendTokenPost); // resend confirmation mail token

module.exports = router;
