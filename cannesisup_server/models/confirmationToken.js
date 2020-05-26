const mongoose = require("mongoose");

const confirmationTokenSchema = mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "adherent",
  },
  token: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now, expires: 8800 },
});

/* avec unique verifie que 2 utilisateurs n'ont pas la même adresse mail */

// userSchema.plugin(uniqueValidator); TODO A ACTIVER

/* Model */
const ConfirmationToken = mongoose.model(
  "ConfirmationToken",
  confirmationTokenSchema
);

module.exports = ConfirmationToken;
