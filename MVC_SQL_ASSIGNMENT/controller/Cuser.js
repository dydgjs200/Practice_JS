exports.main = (req, res) => {
  res.render("index");
};
exports.get_signup = (req, res) => {
  res.render("signup");
};
exports.get_signin = (req, res) => {
  res.render("signin");
};

exports.post_profile = (req, res) => {
  console.log(req.body);
};
