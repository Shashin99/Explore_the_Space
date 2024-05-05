const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.post("/api/users/add", userController.addUser);
router.post("/api/users/login", userController.userLogin);
router.post("/api/users/verify", userController.verifyUser);

module.exports = router;
