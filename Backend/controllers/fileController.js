const File = require("../models/File");
const User = require("../models/User");

exports.uploadFiles = async (req, res) => {
  const files = req.files.map(file => ({
    filename: file.originalname,
    filePath: file.path,
    fileType: file.mimetype,
    size: file.size,
    owner: req.user.id
  }));

  await File.insertMany(files);
  res.json({ message: "Files uploaded" });
};

exports.getFiles = async (req, res) => {
  const files = await File.find({ owner: req.user.id });
  res.json(files);
};

exports.shareWithUsers = async (req, res) => {
  try {
    const { fileId, emails } = req.body;

    // Validation
    if (!fileId || !emails || emails.length === 0) {
      return res.status(400).json({ message: "File ID and emails are required" });
    }

    const file = await File.findById(fileId);
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    // Only owner can share
    if (file.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // Find users by email
    const users = await User.find({ email: { $in: emails } });

    if (users.length === 0) {
      return res.status(400).json({ message: "No valid users found" });
    }

    const userIds = users.map(u => u._id.toString());

    // Add unique users
    userIds.forEach(id => {
      if (!file.sharedWith.includes(id)) {
        file.sharedWith.push(id);
      }
    });

    await file.save();

    res.status(200).json({ message: "File shared successfully" });

  } catch (error) {
    console.error("Share error:", error.message);
    res.status(500).json({ message: "Server error while sharing file" });
  }
};

exports.getSharedFiles = async (req, res) => {
  try {
    const userId = req.user.id;

    const sharedFiles = await File.find({
      sharedWith: userId
    }).populate("owner", "email name");

    res.status(200).json(sharedFiles);

  } catch (error) {
    console.error("Get shared files error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
