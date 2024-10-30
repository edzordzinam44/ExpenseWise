const express = require("express");
const cron = require("node-cron");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const expenseEmail = require("./EmailService/Expense");

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("DB Connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

const schedule = () => {
  cron.schedule("* * * * * *", () => {
    expenseEmail();
  });
};

schedule();
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backgroundservices is running on port ${PORT}`);
});
