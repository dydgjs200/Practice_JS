const express = require("express");
const app = express();
const port = 8000;

// multer 관련 설정
const multer = require("multer");
const path = require("path");
const upload = multer({
  dest: "uploads/", // dest : 클라이언트가 업로드한 파일을 저장할 서버측 경로
});

app.use(express.urlencoded({ extended: true }));
// static 등록 -> 이미지 경로 접근(프론트)
app.use("/uploads", express.static(__dirname + "/uploads"));

// multer 세부 설정
const uploadDetail = multer({
  // storage = 저장할 공간에 대한 정보
  storage: multer.diskStorage({
    destination(req, file, done) {
      // done = callback -> done(null) = 에러 없음
      done(null, "uploads/"); // 파일 업로드 경로 설정
    },
    filename(req, file, done) {
      // 파일 확장자 추출 => path 모듈(require 필요)
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); //확장자 제외 파일 이름 + 현재 시간 + 확장자
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, //5MB
  },
});

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// 1. single( ) : 하나의 파일을 업로드
// upload.single('input:file 태그 name')
// post에는 클라이언트 요청이 들어올 시, upload 객체를 미들웨어로 등록한 뒤 사용함.
// single 안의 인자는 input 태그의 name값과 일치해야함
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  // console.log(req.file);
  // console.log(req.body);
  res.send(req.body);
});

app.post("/dynamic", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send({ file: req.file, title: req.body.title });
});

// 여러 파일을 하나의 인풋에 넣기
// [{file1}, {file2} ... ] -> 배열형태로 옮
app.post(
  "/upload/array",
  uploadDetail.array("userfiles", (req, res) => {
    res.send("하나의 인풋에 여러 업로드 완료");
  })
);

// 각 파일을 여러개의 인풋에 넣기 -> fields( [ 이름 : 'input name' ] )
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfiles1" }, { name: "userfiles2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("여러개의 input에 각 사진 업로드 완료");
  }
);

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
});
