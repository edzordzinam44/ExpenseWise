const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const expenseRoute = require("./routes/expense");

dotenv.config();
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json())

// ROUTES
app.use("/expenses", expenseRoute);

// DB CONNECTION

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("DB connecton is successful");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
