const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs-extra");
const multer = require("multer");
const junk = require("junk");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

app.post("/uploadmultiple", upload.array("images", 12), (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }

  res.send(files);
});

app.listen(3005, () => console.log("Server started on port 3005"));
