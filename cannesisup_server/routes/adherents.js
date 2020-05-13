const express = require("express");
const router = express.Router();
const creationAdherent = require("../controllers/creationAdherent");

/* GET home page. */
router.post("/", creationAdherent);

module.exports = router;
