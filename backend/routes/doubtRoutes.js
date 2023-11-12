const express = require("express");
const { DoubtModel } = require("../models/doubtModel");
const doubtRouter = express.Router();

doubtRouter.get("/history", async (req, res) => {
  try {
    const doubts = await DoubtModel.find({ studentId: req.user.id }).sort({
      time: -1,
    });

    res.status(200).send(doubts);
  } catch (error) {
    console.error("Error fetching doubt history:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});
doubtRouter.post("/", async (req, res) => {
  try {
    let newDoubt = new DoubtModel({ ...req.body });
    await newDoubt.save();
    res.status(200).send("Doubt posted successfully.");
  } catch (error) {
    console.error("Error adding doubt:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = { doubtRouter };
