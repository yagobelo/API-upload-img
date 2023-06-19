const router = require("express").Router();
const upload = require("../config/multer");
const { createPicture } = require("../controllers/pictureController");

router.post("/", upload.single("file"), createPicture);

module.exports = router;
