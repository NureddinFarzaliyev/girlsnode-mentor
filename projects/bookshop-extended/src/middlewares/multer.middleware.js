// multer middleware

const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // create uploads folder if it doesn't exist
    const dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // limit file size to 1MB
});

module.exports = { upload };
