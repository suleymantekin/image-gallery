const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs-extra");
const multer = require("multer");
const junk = require("junk");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(3005, () => console.log("Server started on port 3005"));
