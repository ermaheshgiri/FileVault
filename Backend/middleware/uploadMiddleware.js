const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = ["image/", "application/pdf", "text/csv"];
  if (allowed.some(type => file.mimetype.startsWith(type))) cb(null, true);
  else cb(new Error("Invalid file type"));
};

module.exports = multer({ storage, fileFilter });
