const router = require("express").Router();
const upload = require("../config/multer");
const {
  createPictures,
  getAllPictures,
  getOnePicture,
  deletePictures,
} = require("../controllers/pictureController");

router.post("/", upload.single("file"), createPictures);
router.get("/", getAllPictures);
router.get("/:id", getOnePicture);
router.delete("/:id", deletePictures);

module.exports = router;
