const JWT_tokens = require("../app");
const UserModel = require("../model/index");
const session = require("express-session");
const bcrypt = require("bcrypt");
const User = UserModel.User;

const saltRounds = 10;

exports.main = (req, res) => {
  // 리프레시 토큰이 있다면 로그아웃 버튼을 생성해야함
  if (req.session.RefreshId) {
    console.log("Refresh session > ", req.session.RefreshId);

    res.render("index", { isLogoutBtn: true });
  } else {
    console.log("리프레시 토큰 세션 존재하지않음.");
    res.render("index");
  }
};

exports.login = (req, res) => {
  res.render("login");
};
exports.board = (req, res) => {
  res.render("board");
};

exports.register = (req, res) => {
  console.log("register > ", req.body);
  const { id, password } = req.body;

  // bcrypt를 사용하여 비밀번호 암호화 후 DB 저장
  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      res.status(500).send("Internal Server Error");
      return;
    }

    // DB에 저장
    User.create({
      id: id,
      password: hashedPassword,
    }).then((result) => {
      res.send(result);
    });
  });
};

// 로그인 페이지에서 제출한 폼 데이터를 db에서 서치함(Read)
// 비밀번호의 경우 bcrypt로 해시된 값을 comparesync로 비교해야함
exports.post_loginUser = (req, res) => {
  const data = req.body;
  console.log("data > ", data);

  User.findOne({
    where: {
      id: data.id,
    },
  }).then((result) => {
    console.log("findOne > ", result);

    if (result) {
      // DB에서 가져온 해시된 비밀번호와 사용자가 입력한 비밀번호를 비교
      if (bcrypt.compareSync(data.password, result.password)) {
        // 비밀번호 일치
        console.log(bcrypt.compareSync(data.password, result.password));

        // 토큰 생성(id값으로 해시)
        const AccessToken = JWT_tokens.generate_Access_token({
          userId: result.id,
        });
        const RefreshToken = JWT_tokens.generate_Refresh_token({ AccessToken });
        console.log(
          "Acess token > ",
          AccessToken,
          "\nRefresh > ",
          RefreshToken
        );

        // 처음 로그인 시, accessToken을 DB에 저장, refreshToken은 세션에 저장
        result
          .update({ AccessToken: AccessToken })
          .then(console.log("AccessToken Update 완료"));
        req.session.RefreshId = RefreshToken;

        res.json({ userId: data.id, AccessToken, RefreshToken });
      } else {
        // 비밀번호 불일치
        res.send("로그인이 유효하지 않습니다. id 또는 pw 확인 !");
      }
    } else {
      // 사용자가 없음
      res.send("로그인이 유효하지 않습니다. id 또는 pw 확인 !");
    }
  });
};
