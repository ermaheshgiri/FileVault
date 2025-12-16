const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  filename: String,
  filePath: String,
  fileType: String,
  size: Number,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("File", FileSchema);
