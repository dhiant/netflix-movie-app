const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection is successful"))
  .catch((err) => {
    console.log("error occurs", err);
  });

mongoose.connection.on("error", (err) => {
  console.log("errors after initial connection", err);
});

app.listen(8800, () => {
  console.log("backend server is running on port 8800");
});
