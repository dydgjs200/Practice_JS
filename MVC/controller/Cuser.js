const User = require("../model/User");
exports.main = (req, res) => {
  res.render("user");
};

// GET / user
exports.user = function (req, res) {
  console.log(User.userInfo());
  res.render("user", { userInfo: User.userInfo() });
};
