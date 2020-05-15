const jwt = require("jsonwebtoken");
const User = require("../models/adherent");

const authentification = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;

    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      User.findOne({ _id: userId }, (err, data) => {
        if (err) {
          res.status(500).json({
            error: new Error("Internal server error!"),
          });
          return;
        }

        if (!data) {
          res.status(404).json({
            error: new Error("User not found!"),
          });
          return;
        }

        req.user = data;
        next();
      });
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};

module.exports = authentification;
