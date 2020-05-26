const mongoose = require("mongoose");

/* Schema */
const confirmationTokenSchema = mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "adherent",
  },
  token: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now, expires: 8800 },
});

/* Model */
const ConfirmationToken = mongoose.model(
  "ConfirmationToken",
  confirmationTokenSchema
);

module.exports = ConfirmationToken;
