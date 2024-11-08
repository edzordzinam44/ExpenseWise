const express = require("express");
const cors = require('cors');
const User = require("./models/userModel");
const mongoose = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());

//ALLOW CORS FOR FRONTEND ORIGIN
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

// INITIALIZE USER AS NULL
let user = null;

// AUTHENTICATE THE USER

// ROUTES
app.use("/auth", authRoutes);

// START THE SERVER
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Authentication server is running on port ${PORT}`);
});
