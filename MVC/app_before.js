const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (임시) DB로부터 받아온 데이터 댓글 목록
const comments = [
  {
    id: 1,
    userid: "helloworld",
    date: "2022-10-31",
    comment: "안녕하세요",
  },
  {
    id: 2,
    userid: "hello",
    date: "2022-11-31",
    comment: "반가워요",
  },
  {
    id: 3,
    userid: "apple",
    date: "2022-12-31",
    comment: "오 신기하다",
  },
  {
    id: 4,
    userid: "best",
    date: "2023-9-31",
    comment: "댓글 적기",
  },
];

const userInfo = {
  realId: "helloworld",
  realPw: "1234",
  name: "hong",
  age: 20,
};

// MVC 적용 전에는 app.js에서 라우트 정의
// 단점: 라우터(경로)가 많아지면 코드가 꼬임(유지보수 힘듦)
app.get("/", (req, res) => {
  res.render("index");
});

// GET / comments
app.get("/comments", function (req, res) {
  console.log(comments);
  res.render("comments", { commentInfos: comments });
});

// GET / comment/:id
app.get("/comment/:id", function (req, res) {
  // req.query : /comment?id=1 이런식임.
  console.log(req.params); //{id:'1'} 라우트 매개변수에 대한 정보가 담겨있음
  console.log("id > ", req.params.id);

  const commentId = req.params.id;
  console.log(comments[commentId - 1]);

  res.render("comment", { commentInfo: comments[commentId - 1] });

  if (commentId < 1 || commentId > comments.length) {
    //갖고있는 정보의 길이보다 작거나 음수면 404페이지
    return res.render("404");
  }
  if (isNaN(commentId)) {
    // :id 변수에 숫자가 아닌 값이 오면 404
    return res.render("404");
  }
});

// GET / user
app.get("/user", function (req, res) {
  res.render("user", { userInfo });
});

// [404 error]
// 맨 마지막에 라우트로 선언해야함 -> 위에 하면 나머지 애들 무시된다..
app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, () => {
  console.log("server open");
});
