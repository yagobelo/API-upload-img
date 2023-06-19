const { createPictureService } = require("../services/pictureServices");

exports.createPicture = async (req, res) => {
  try {
    const { name } = req.body;
    const file = req.file;

    await createPictureService(name, file);

    res.status(200).json({ message: "Image Saved!" });
  } catch (error) {
    res.json({ message: error.message });
    console.log(error);
  }
};
