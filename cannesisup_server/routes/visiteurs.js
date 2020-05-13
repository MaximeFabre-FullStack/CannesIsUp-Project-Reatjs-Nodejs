const express = require("express");
const router = express.Router();
const affichageVisiteurs = require("../controllers/affichageVisiteurs");

/* GET home page. */
router.get("/", affichageVisiteurs); // a tester sur POSTMAN

module.exports = router;
