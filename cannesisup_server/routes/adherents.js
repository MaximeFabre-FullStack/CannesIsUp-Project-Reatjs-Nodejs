const express = require("express");
const router = express.Router();
const creationAdherent = require("../controllers/creationAdherent");
const upload = require("../middleware/uploadConfig");

/* GET /adherents */
router.post(
  "/",
  upload,
  creationAdherent

  /*(req, res, next) => {
    res.json("test OK");
    console.log(req.body);
  }*/
);

module.exports = router;
