const fs = require("fs");

const {
  createPicturesService,
  getAllPicturesService,
  getOnePictureService,
  deletePicturesService,
} = require("../services/pictureServices");

exports.createPictures = async (req, res) => {
  try {
    const { name } = req.body;
    const file = req.file;

    await createPicturesService(name, file);

    res.status(200).json({ message: "Image Saved!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

exports.getAllPictures = async (req, res) => {
  try {
    const pictures = await getAllPicturesService();

    if (!pictures) {
      return res.status(404).json({ message: "No images found" });
    }
    res.status(200).json({ message: pictures });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOnePicture = async (req, res) => {
  try {
    const { id } = req.params;
    const picture = await getOnePictureService(id);

    if (!picture) {
      res.status(404).json({ message: "Image not found!" });
    }

    res.status(200).json({ message: picture });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePictures = async (req, res) => {
  try {
    const { id } = req.params;
    const picture = await getOnePictureService(id);

    if (!picture) {
      res.status(404).json({ message: "Image not found!" });
    }

    fs.unlinkSync(picture.src);
    await deletePicturesService(id);

    res.status(200).json({ message: "Picture deleted with success!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};
