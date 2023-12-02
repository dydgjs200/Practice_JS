const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// GET / user
router.get("/", controller.main);

// GET / user / signup , signin
router.get("/signup", controller.get_signup);
router.get("/signin", controller.get_signin);

module.exports = router;
