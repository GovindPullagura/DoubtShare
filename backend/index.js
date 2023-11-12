const express = require("express");
const { connection } = require("./db");
const { authRouter } = require("./routes/authRoutes");
const { authMiddleware } = require("./middlewares/authMiddleware");
const { doubtRouter } = require("./routes/doubtRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/auth", authRouter);
app.use(authMiddleware);
app.use("/doubts", doubtRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to the Database.");
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
  console.log("Listening on port", PORT);
});
