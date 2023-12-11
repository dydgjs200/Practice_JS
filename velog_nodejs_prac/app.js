const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db = require("./model/index");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const checkTokenMiddleware = require("./middleware/checkToken");

dotenv.config();
const PORT = process.env.PORT;
const SECRETKEY = process.env.SECRETKEY || "fallback_secret_key";

// jwt 키발급 함수 -> Access, Refresh 두개 발급
function generate_Access_token(payload) {
  return jwt.sign(payload, SECRETKEY, { expiresIn: "15m" });
}
function generate_Refresh_token(payload) {
  return jwt.sign(payload, SECRETKEY, { expiresIn: "7d" });
}
app.use(cookieParser());
// Controller에서 키발급하도록 exports화
module.exports = {
  generate_Access_token,
  generate_Refresh_token,
};

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("static"));
app.use(express.json());

// 미들웨어를 전역으로 사용하도록 설정
//app.use(checkTokenMiddleware);
const indexRouter = require("./routes");
app.use("/", indexRouter);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("server open");
  });
});
