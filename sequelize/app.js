const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models/index");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [라우터 분리]
const indexRouter = require("./routes");
app.use("/", indexRouter); // localhost:PORT/

// [404 error] 맨 마지막 라우트로 선언
app.get("*", (req, res) => {
  res.render("404");
});

// 시퀄라이즈 시 이거 해줘야함
db.sequelize
  .sync({ force: false })
  .then(() => {
    // force: false => 테이블 없을 시 생성 / true => 테이블 무조건 생성 (DB가 만약 있으면 다 삭제하고 다시 생성 -> production에서는 사용하지말자)
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
