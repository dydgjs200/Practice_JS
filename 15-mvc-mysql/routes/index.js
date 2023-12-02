const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// 기본주소 : localhost:PORT

// GET /
router.get("/", controller.main);

// GET /visitors - 전체 조회
router.get("/visitors", controller.get_visitors);

// GET / visitor - 단일 조회
// params(:id) 사용시 라우터 정의 순서에 주의 해야함. -> 만약  /visitor/test가 있다면, 꼬일 수 있어서 test를 위에 써야함
router.get("/visitor", controller.get_visitor);
router.get("/visitor/:id", controller.get_visitor2);

// POST /visitor
router.post("/visitor", controller.post_visitor);

// PATCH / visitor - 하나 수정
router.patch("/visitor", controller.patch_visitor);

// DELETE /visitor - 하나 삭제
router.delete("/visitor", controller.delete_visitor);

module.exports = router;
