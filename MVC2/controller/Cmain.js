exports.main = (req, res) => {
  res.render("index");
};

// 모델 연결
const loginData = require("../model/Login");

exports.register = (req, res) => {
  res.render("register", { userInfo: loginData.userInfo() });
};
