const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/");
  },
  filename: function (req, file, cb) {
    const name = req.body.name.replace(/ /g, "-");
    cb(
      null,
      name +
        "-" +
        Math.floor(Date.now() * Math.random()).toString(10) +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

module.exports = upload;
