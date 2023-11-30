const express = require("express");
const router = express.Router();
const Contoller = require("../controller/Cmain"); // 컨트롤러 등록

//컨트롤러 내부 함수를 get으로 연결
router.get("/", Contoller.main); //main 함수 페이지
router.get("/register", Contoller.register);

module.exports = router;
