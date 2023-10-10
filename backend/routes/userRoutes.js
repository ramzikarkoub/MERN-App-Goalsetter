const express = require("express");
const router = express.Router();
const {
  registerUser,
  getMe,
  loginUser,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");
//register
router.post("/", registerUser);
//Login
router.post("/login", loginUser);
//get user info
router.get("/me", protect, getMe);
module.exports = router;
