const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.get("/practice2", controller.practice2);
router.post("/axios2", controller.axios2);

module.exports = router;
