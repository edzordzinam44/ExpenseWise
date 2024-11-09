const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

// USER SIGNUP
exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // CHECK IF USER ALREADY EXISTS
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return res.status(400).send("User already exists");
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE AND SAVE USER
    const user = new User({ username, email, passwordHash: hashedPassword });
    await user.save();

    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(500).send("Error signing up");
  }
};

// USER LOGIN
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send("User not found");

    // CHECK IF PASSWORD MATCHES
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) return res.status(401).send("Invalid password");

    // CREATE JWT TOKEN
    const token = jwt.sign({ userId: user._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error("Login error", error);
    res.status(500).send("Error logging in");
  }
};

// PASSWORD RESET REQUEST
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("User not found");

    // GENERATE RESET TOKEN
    const token = crypto.randomBytes(32).toString("hex");
    user.resetToken = token;
    user.resetTokenExpiration = Date.now() + 3600000; // 1hr expiration
    await user.save();

    // SEND RESET PASSWORD EMAIL
    const transporter = nodemailer.createTransport({
      /* Your SMPT setting */
    });
    await transporter.sendMail({
      to: user.email,
      subject: "Password Reset",
      text: "Reset your password here: http://expensewise.com/reset-password/${token}",
    });

    res.send("Password reset link sent");
  } catch (error) {
    res.status(500).send("Error sending reset password email");
  }
};

// PASSWORD RESET
exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() },
    });
    if (!user) return res.status(400).send("Token is invalid or has expired");

    // HASH NEW PASSWORD AND SAVE
    user.passwordHash = await bcrypt.hash(newPassword, 10);
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();

    res.send("Password reset successful");
  } catch (error) {
    res.status(500).send("Error resetting password");
  }
};
