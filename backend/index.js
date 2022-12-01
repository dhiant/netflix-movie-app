const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

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

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("backend server is running on port 8800");
});
