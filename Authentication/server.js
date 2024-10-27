const express = require("express");
const mongoose = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

// ROUTES
app.use("/auth", authRoutes);

// START THE SERVER
const PORT = process.env.PORT || 5002;
app.listen(PORT, () =>
  console.log("Authentication is runing on port ${process.env.PORT}")
);
