const express = require("express");
const router = express.Router();

const controller = require("../controller/controll_register");

// GET /
router.get("/", controller.main);

// GET / register
router.get("/register", controller.ReadALLRegister);

// POST / register
router.post("/register", controller.CreateRegister);

// DELETE / register
router.delete("/register", controller.DeleteRegister);

module.exports = router;
