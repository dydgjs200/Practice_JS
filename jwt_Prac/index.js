const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const PORT = 8000;

// 아무거나 눌러서 만듦
const SECRET = "3najfo5o5p2WFGaidnzpdmbk9878dam";

const userInfo = { id: "banana", pw: "1234", name: "홍길동", age: 59 };

app.set("view engine", "ejs");
//app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});

// jwt 생성 시 에러 방지를 위한 try-catch
app.post("/login", (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;

    if (id === realId && pw === realPw) {
      // jwt.sign 은 토큰 생성 (payload, secretKey, [options, cb])
      const token = jwt.sign({ id: id }, SECRET);
      res.send({ isLogin: true, token });
    } else {
      res.send({ isLogin: false, msg: "로그인 실패!!!!~!~!~!~!~!!" });
    }
  } catch (err) {
    console.log("login post err > ", err);
  }
});

// 토큰 검증 요청
app.post("/token", (req, res) => {
  console.log("token > ", req.headers.authorization);

  if (req.headers.authorization) {
    const auth = req.headers.authorization.split(" ");
    const token = auth[1];

    console.log(token);

    // 토큰 검증 verify(token, secret)
    const result = jwt.verify(token, SECRET);
    console.log(result);

    if (result.id === userInfo.id) {
      res.send({ isVerify: true, name: userInfo.name });
    } else {
      res.send({ isVerify: false, msg: "잘못된 접근" });
    }
  } else {
    res.redirect("/login");
  }
});

app.listen(PORT, () => {
  console.log("server open");
});
