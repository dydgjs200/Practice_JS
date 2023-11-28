const express = require("express");
const app = express();
const PORT = 8000;

const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname + "/uploads"));

// multer 세부 설정
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/"); // 파일 업로드 경로 설정
    },
    filename(req, file, done) {
      const userId = req.profile.id;
      const ext = path.extname(file.originalname);
      const filename = `${userId}${ext}`;
      done(null, filename);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, //5MB
  },
});
app.get("/", function (req, res) {
  res.render("ass_index");
});

app.post("/register", upload.single("profile"), function (req, res) {
  const profile = req.body; //수신된 정보
  const file = req.file;
  console.log(profile, file);

  res.send({
    file: file,
    id: profile.id,
    password: profile.password,
    name: profile.name,
    age: profile.age,
  });
});

app.listen(PORT, () => {
  console.log("server open");
});
