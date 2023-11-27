const express = require("express");
const app = express();
const PORT = 8000;

const multer = require("multer");
const path = require("path");
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "/uploads");
    },
    filename(req, file, done) {
      const ext = path.extname;
      done(null, this.destination.ext);
    },
  }),
});

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("ass_index");
});

app.post("/register", upload.single("register"), function (req, res) {
  //
});

app.listen(PORT, () => {
  console.log("server open");
});
