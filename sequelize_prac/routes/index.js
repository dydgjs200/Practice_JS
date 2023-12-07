const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.main);
router.get("/login", controller.login);
router.post("/login", controller.post_Login);

module.exports = router;
