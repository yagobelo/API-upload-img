const Picture = require("../models/Picture");

exports.createPictureService = (name, file) => {
  const picture = new Picture({
    name,
    src: file.path,
  });

  return Picture.create(picture);
};
