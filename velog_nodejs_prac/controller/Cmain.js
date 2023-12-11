const JWT_tokens = require("../app");
const UserModel = require("../model/index");
const cookieParser = require("cookie-parser");
const User = UserModel.User;

const express = require("express");
const app = express();
app.use(express.json());
app.use(cookieParser());

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  res.render("login");
};
exports.board = (req, res) => {
  res.render("board");
};

// 로그인 페이지에서 제출한 폼 데이터를 db에서 서치함(Read)
exports.post_loginUser = (req, res) => {
  const data = req.body;

  User.findOne({
    where: { id: data.id, password: data.password },
  }).then((result) => {
    console.log("findOne > ", result);

    if (result) {
      // 폼 데이터 입력값 찾았다면 토큰 생성(id값으로 해시)
      const AccessToken = JWT_tokens.generate_Access_token({
        userId: result.id,
      });
      const RefreshToken = JWT_tokens.generate_Refresh_token({ AccessToken });
      console.log("Acess token > ", AccessToken, "\nRefresh > ", RefreshToken);

      // 처음 로그인 시, accessToken을 db에 저장, refreshToken은 cookie에 저장
      result
        .update({ AccessToken: AccessToken })
        .then(console.log("AccessToken Update 완료"));

      res.cookie("Refresh", RefreshToken);

      res.json({ userId: data.id, AccessToken, RefreshToken });
    } else {
      res.send("로그인이 유효하지 않습니다. id 또는 pw 확인 !");
    }
  });
};
