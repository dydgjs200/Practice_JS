const userInfo = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

// GET / practice2
exports.practice2 = (req, res) => {
  res.render("practice2");
};

// POST / axios2
exports.axios2 = (req, res) => {
  console.log(req.body);
  console.log(userInfo.userInfo().id);
  res.send({
    userid: userInfo.userInfo().id,
    userPw: userInfo.userInfo().password,
  });
};
