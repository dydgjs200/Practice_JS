const Visitor = require("../model/Visitor");

// GET /
exports.main = (req, res) => {
  res.render("index");
};

// GET /visitors - 전체 조회
exports.get_visitors = (req, res) => {
  // [Before]
  // console.log(Visitor.getVisitors()); // [ {}, {}]
  // res.render('visitor', { data: Visitor.getVisitors() });

  // [After]
  // 데이터 흐름 = 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> view
  // 모델에서 날아온 결과값 콜백을 인자값으로 받음
  Visitor.getVisitors((result) => {
    console.log("Cvisitor.js >", result);
    res.render("visitor", { data: result });
  });
};

// GET / visitor - 단일 조회(localhost:8000/vsitior?id=N)
exports.get_visitor = (req, res) => {
  console.log(req.query);

  Visitor.getVisitor(req.query.id, (result) => {
    // result = rows[0] => { id: 1, name: '홍길동', comment: '내가 왔다.' }
    console.log("Cvisitor.js의 getVsitor 함수 > ", result);
    res.send(result);
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
  Visitor.postVisitor(req.body, (result) => {
    // req.body를 모델에 넘김 -> result는 모델의 postVisitor에서 리턴된 값을 담음
    console.log(result);
    res.send({ id: result, name, comment });
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
  Visitor.deleteVisitor(req.body.id, (result) => {
    res.send("삭제 성공");
  });
};
