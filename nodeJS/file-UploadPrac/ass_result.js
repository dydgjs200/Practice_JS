const express = require("express");
const app = express();
const PORT = 8000;

const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadPractice = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      console.log("file name > req : ", req);
      const ext = path.extname(file.originalname);

      done(null, file.originalname);
    },
  }),
});

app.get("/", function (req, res) {
  res.render("ass_result");
});

app.post("/upload/practice", uploadPractice.single("profile"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("응답");
});

app.post(
  "/upload/practiceDynamic",
  uploadPractice.single("profile"),
  (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.send("응답");
  }
);

app.listen(PORT, () => {
  console.log("server open");
});
