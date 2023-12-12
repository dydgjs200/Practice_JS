const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);

router.get("/login", controller.login);
router.post("/login", controller.post_loginUser);

router.get("/board", controller.board);

module.exports = router;
