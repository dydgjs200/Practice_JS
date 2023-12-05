const models = require("../model/index");
const User = models.User;

exports.main = (req, res) => {
  res.render("index");
};

exports.get_signup = (req, res) => {
  res.render("signup");
};

exports.get_signin = (req, res) => {
  res.render("signin");
};

// 회원가입 요청
exports.post_signup = (req, res) => {
  // 뷰 (요청) -> 라우터 -> 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 뷰 (응답)
  console.log("post_signup >", req.body);
  const { id, userid, name, pw } = req.body;

  User.Create({
    id: id,
    userid: userid,
    name: name,
    pw: pw,
  }).then((result) => {
    console.log("Create > ", result);
    res.send(result);
  });
};

// 로그인 요청 -> 입력된 하나의 값을 조회(id, pw) -> 검증
exports.post_signin = (req, res) => {
  console.log(req.body);
  const { userid, pw } = req.body;
  //   User.post_signin(req.body, (result) => {
  //     // result: rows [{}]
  //     if (result.length > 0) res.send({ isLogin: true, userInfo: result[0] });
  //     else res.send({ isLogin: false });
  //   });

  User.findOne({
    where: { userid: userid, pw: pw },
  }).then((result) => {
    console.log("findOne > ", result);

    if (result) {
      console.log(`유져 아이디 찾음 ${userid} , ${pw}`);
      res.send({ isLogin: true, userInfo: result[0] });
    } else {
      console.log("못찾음ㅠㅠ");
      res.send({ isLogin: false });
    }
  });
};

// 회원정보 수정 페이지 요청
exports.post_profile = (req, res) => {
  console.log(req.body); // {userid: ~}
  User.findOne({
    row: true, //부가적 데이터 말고 알맹이만 출력됩니다
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log("profile > ", result.userid);
    if (result) res.render("profile", { data: result });
  });
};

// 회원정보 수정 요청
exports.edit_profile = (req, res) => {
  console.log(req.body);
  const { pw, name } = req.body;
  User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  ).then((result) => {
    res.send("수정 했음");
  });
};

// 회원 탈퇴 요청
exports.delete_profile = (req, res) => {
  console.log(req.body); // {id: ~}

  User.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    res.send("삭제 완료");
  });
};
