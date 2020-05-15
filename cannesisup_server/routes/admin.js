const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // tested ok
  res.send("coucou admin");
});

module.exports = router;
