const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const { uploadFiles, getFiles } = require("../controllers/fileController");
const { shareWithUsers } = require("../controllers/fileController");
const { getSharedFiles } = require("../controllers/fileController");

router.post("/upload", auth, upload.array("files"), uploadFiles);
router.get("/", auth, getFiles);
router.post("/share", auth, shareWithUsers);
router.get("/shared", auth, getSharedFiles);

module.exports = router;
