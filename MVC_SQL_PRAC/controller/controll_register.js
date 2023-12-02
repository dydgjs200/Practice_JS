// 데이터 모델 연결
const RegisterData = require("../model/register");
const { use } = require("../routes");

exports.main = function (req, res) {
  res.render("index");
};

// 모든 정보 출력
exports.ReadALLRegister = function (req, res) {
  RegisterData.ReadALLRegister((result) => {
    console.log("Read All DB C > ", result);

    res.render("register", { data: result });
  });
};

// DB 하나 생성
exports.CreateRegister = function (req, res) {
  const { userid, name, pw } = req.body;
  RegisterData.CreateRegister(req.body, (result) => {
    res.send({ id: result, userid, name, pw });
  });
};

exports.DeleteRegister = function (req, res) {
  const userid = req.body.userid;
  console.log("Delete userid > ", userid);
  RegisterData.DeleteRegister(userid, (result) => {
    console.log(result);
    res.send(result);
  });
};
