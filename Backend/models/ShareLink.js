const mongoose = require("mongoose");

const ShareLinkSchema = new mongoose.Schema({
  fileId: { type: mongoose.Schema.Types.ObjectId, ref: "File" },
  token: String,
  expiresAt: Date
});

module.exports = mongoose.model("ShareLink", ShareLinkSchema);
