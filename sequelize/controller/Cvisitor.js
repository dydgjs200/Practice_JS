// models/index에서 export 하는 db객체
const models = require("../models/index");
// models/index에 선언된 Visitor 객체를 사용
const Visitor = models.Visitor;

// GET /
exports.main = (req, res) => {
  res.render("index");
};

// GET /visitors - 전체 조회
exports.get_visitors = (req, res) => {
  // [After] -> 예전에는 models에서 쿼리문을 삽입했지만, 이제는 controller에서 사용할 것
  // SELECT * FROM visitor
  Visitor.findAll().then((result) => {
    console.log("findAll > ", result);
    res.render("visitor", { data: result });
  });
};

// GET / visitor - 단일 조회(localhost:8000/vsitior?id=N)
exports.get_visitor = (req, res) => {
  Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    console.log("findOne > ", result);
  });
};

// GET / visitor /:id
exports.get_visitor2 = (req, res) => {
  console.log(req.params);

  Visitor.getVisitor(req.params.id, (result) => {
    // result = rows[0] => { id: 1, name: '홍길동', comment: '내가 왔다.' }
    console.log("Cvisitor.js의 getVsitor 함수 > ", result);
    res.send(result);
  });
};

// POST /visitor
exports.post_visitor = (req, res) => {
  console.log(req.body);
  const { name, comment } = req.body;

  Visitor.create({
    name: name,
    comment: comment,
  }).then((result) => {
    console.log("create > ", result);
    res.send(result);
  });
};

// PATCH / visitor
exports.patch_visitor = (req, res) => {
  console.log(req.body);

  Visitor.patchVisitor(req.body, (result) => {
    console.log("patchVisitor C > ", result);
    res.send("수정 성공");
  });
};

exports.delete_visitor = (req, res) => {
  console.log("delete > ", req.body.id);
  Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    res.send("삭제 성공");
  });
};
