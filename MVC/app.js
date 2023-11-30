const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = {
  realId: "helloworld",
  realPw: "1234",
  name: "hong",
  age: 20,
};

// MVC 적용 전에는 app.js에서 라우트 정의
// 단점: 라우터(경로)가 많아지면 코드가 꼬임(유지보수 힘듦)

// [After] MVC 적용 후 -> router 객체로 분리
const indexRouter = require("./routes/index"); // index는 생략 가능.(다른 이름이면 생략x)
const UserRouter = require("./routes/user");
app.use("/", indexRouter); //use로 라우터 등록 -> localhost:PORT/ 경로를 기본으로 ./routes/index.js에 선언한대로 동작
app.use("/user", UserRouter);

app.listen(PORT, () => {
  console.log("server open");
});
