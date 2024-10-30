const express = require("express");
const mongoose = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());

// INITIALIZE USER AS NULL
let user = null;

// AUTHENTICATE THE USER
app.post("/login", async (req, res) => {
  user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  // SIGN TOKEN WITH USER ID ONLY if USER EXISTS
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1hr",
  });

  res.json({ token });
});

// ROUTES
app.use("/auth", authRoutes);

// START THE SERVER
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Authentication is running on port ${PORT}`);
});
