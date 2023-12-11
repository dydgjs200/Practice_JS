const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");
//const checkTokenMiddleware = require("../middleware/checkToken");

// 미들웨어를 라우터에 적용
//router.use(checkTokenMiddleware);

router.get("/", controller.main);

router.get("/login", controller.login);
router.post("/login", controller.post_loginUser);

router.get("/board", controller.board);

module.exports = router;
