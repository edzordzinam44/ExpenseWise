const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// ROUTE FOR USER SIGNUP
router.post("/signup", authController.signup);

// ROUTE FOR USER LOGIN
router.post("/login", authController.login);

// ROUTE FOR FORGOT PASSWORD
router.post("/forgot-password", authController.forgotPassword);

// ROUTE FOR RESET PASSWORD
router.post("/reset-password/:token", authController.resetPassword);

module.exports = router;
