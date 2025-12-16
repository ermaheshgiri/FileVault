const crypto = require("crypto");
const ShareLink = require("../models/ShareLink");

exports.generateLink = async (req, res) => {
  const token = crypto.randomBytes(20).toString("hex");

  await ShareLink.create({
    fileId: req.body.fileId,
    token,
    expiresAt: new Date(Date.now() + 60 * 60 * 1000) // 1 hour
  });

  res.json({ link: `http://localhost:3000/share/${token}` });
};
