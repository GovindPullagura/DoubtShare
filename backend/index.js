const express = require("express");
const { connection } = require("./db");
const { authRouter } = require("./routes/authRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/auth", authRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to the database.");
  } catch (error) {
    console.log(error.message);
  }
  console.log("Listening to the Port -", process.env.PORT);
});
