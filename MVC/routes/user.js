const express = require("express");
const router = express.Router();
const controller_User = require("../controller/Cuser");

router.get("/user", controller_User.user);

// module.exports를 통해 라우터를 등록해야 다른 모듈에서 사용 가능
module.exports = router;
