const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;

// 서버 설정
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); //폴더의 위치가 달라지므로 __dirname을 꼭 붙여서 해당 파일을 기준으로 설정해야함

// 라우터
app.get("/", function (req, res) {
  res.render("form");
});

// 미들웨어 등록
app.use("/static", express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));

// server listen
app.listen(PORT, function () {
  console.log("connect main server");
});

// 메인페이지
app.get("/", function (req, res) {
  res.render("form");
});

// axios 페이지
app.get("/axios", function (req, res) {
  res.send(req.query);
});

// app.get("/getForm", function (req, res) {
//   res.render("result", {
//     userInfo: req.query,
//   });
// });
// app.post("/postForm", function (req, res) {
//   res.render("result", {
//     title: "post Req Result",
//     userInfo: req.body,
//   });
// });
