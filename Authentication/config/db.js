const mongoose = require("mongoose");
const dotenv = require("dotenv");

mongoose
  .connect("mongodb+srv://samuraxworld:NbaHpUkzHDuACdaC@cluster0.nrbni.mongodb.net/Cluster0")
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error", err));
