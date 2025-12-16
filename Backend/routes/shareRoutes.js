const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { generateLink } = require("../controllers/shareController");

router.post("/generate", auth, generateLink);

module.exports = router;
