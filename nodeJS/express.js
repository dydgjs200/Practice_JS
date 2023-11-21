const express = require("express");
const app = express();
const PORT = 8000;

// express에 사용할 템플릿 엔진 ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// 미들 웨어 등록 -> 정적파일(css, js 등) 로드를 위함
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(PORT, function () {
  console.log("listening port");
});
