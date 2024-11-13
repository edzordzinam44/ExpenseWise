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
  // SENDS EMAIL EVERY 2 MINUTES
  cron.schedule("*/2 * * * *", async () => {
    try {
      await expenseEmail();
      console.log("Expense email sent successfully");
    } catch (error) {
      console.error("Error sending expense email:", error);
    }
  });
};

schedule();
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backgroundservices is running on port ${PORT}`);
});
