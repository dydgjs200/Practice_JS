const model = require("../models/index");
const User = model.User;

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  res.render("login");
};

exports.post_Login = (req, res) => {
  console.log("post_login > ", req.body);

  const { id, email, password } = req.body;

  User.findOne({
    where: { email: email, password: password },
  }).then((result) => {
    if (result != null) {
      // result가 있다면 세션을 보내서 로그인 검증
      req.session.isLogin = email;
      console.log("session > ", req.session);

      res.send({ isLogin: req.session.isLogin });
    } else {
      res.send({ isLogin: false });
    }
  });
};
