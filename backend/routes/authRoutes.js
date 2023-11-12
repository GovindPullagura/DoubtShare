const express = require("express");
const { UserModel } = require("../models/userModel");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

authRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      res.send({ msg: "User exists." });
    } else {
      bcrypt.hash(password, 3, async (err, hash) => {
        let newUser = new UserModel({
          ...req.body,
          password: hash,
        });
        await newUser.save();
        res.send({ msg: "Registration Successful." });
      });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (!user) {
      res.send("User does not exist.");
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          var token = jwt.sign({ studentId: user.id }, "revly");
          res.send({ msg: "Login Success", token });
        } else {
          res.send("Incorrect Password.");
        }
      });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { authRouter };
