// GET / (exports로 내보내야 다른곳에서 사용가능)
exports.main = (req, res) => {
  res.render("index");
};

// [After] 모델 연결 후
const Comment = require("../model/Comment");

// [Before] 모델 연결 전
// 임시 db
// const comments = [
//   {
//     id: 1,
//     userid: "helloworld",
//     date: "2022-10-31",
//     comment: "안녕하세요",
//   },
//   {
//     id: 2,
//     userid: "hello",
//     date: "2022-11-31",
//     comment: "반가워요",
//   },
//   {
//     id: 3,
//     userid: "apple",
//     date: "2022-12-31",
//     comment: "오 신기하다",
//   },
//   {
//     id: 4,
//     userid: "best",
//     date: "2023-9-31",
//     comment: "댓글 적기",
//   },
// ];

// GET / comments
exports.comments = function (req, res) {
  console.log(Comment.commentInfos());
  res.render("comments", { commentInfos: Comment.commentInfos() });
};

// GET / comment/:id
exports.comments = function (req, res) {
  console.log(Comment.commentInfos());
  res.render("comments", { commentInfos: Comment.commentInfos() });
};

// GET / comment/:id
exports.comment = function (req, res) {
  // req.query : /comment?id=1 이런식임.
  console.log(req.params); //{id:'1'} 라우트 매개변수에 대한 정보가 담겨있음
  console.log("id > ", req.params.id);

  const comments = Comment.commentInfos(); //model 연결 후
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
};
