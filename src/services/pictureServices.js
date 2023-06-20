const Picture = require("../models/Picture");
const fs = require("fs");

exports.createPicturesService = (name, file) => {
  const picture = new Picture({
    name,
    src: file.path,
  });

  return Picture.create(picture);
};

exports.getAllPicturesService = () => Picture.find().sort({ _id: -1 });

exports.getOnePictureService = (id) => Picture.findOne({ _id: id });

exports.deletePicturesService = (id, picture) => {
  fs.unlinkSync(picture.src);
  return Picture.findOneAndDelete({ _id: id });
};
