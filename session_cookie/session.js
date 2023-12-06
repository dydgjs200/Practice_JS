const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

// 세션 옵션 객체
// secure : 값을 true로 하면 https에서만 세션을 주고 받음
// secret : 안전하게 쿠키를 전송하기 위한 쿠키 서명 값
// resave : 세션에 수정사항 없어도 매 요청마다 세션을 저장할 것인지 지정(기본값 : false)
// saveUninitialized : 세션에 저장할 내역이 없어도 처음부터 세션을 생성할지 설정
// -> cookie 객체에 넣어서

app.use(
  session({
    secret: "mySession",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000,
    },
  })
);

app.get("/", (req, res) => {
  res.render("session");
});

app.get("/set", (req, res) => {
  // 세션 설정 -> {name: "홍길동"}
  req.session.name = "홍길동";
  res.send("세션 설정 완료");
});

app.get("/name", (req, res) => {
  console.log(req.session.name);
  console.log(req.sessionID);
  console.log(req.session);

  res.send({ id: req.sessionID, name: req.session.name });
});

app.get("/destory", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.send("fail");
      return;
    }
    res.redirect("/name");
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
