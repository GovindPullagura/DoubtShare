const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
  var token;
  if (req.headers.authorization) {
    token = req?.headers?.authorization.split(" ")[1];
    // console.log(token);
  } else {
    return res.send("Please pass token in headers");
  }
  if (token == undefined) return res.status(400).send("Invalid token");
  try {
    var decoded = jwt.verify(token, "revly");
  } catch (error) {
    res.status(400).send(error.message);
  }

  if (decoded) {
    let user = await UserModel.find({ _id: decoded.studentId });
    // console.log(user);
    if (user.length) {
      req.body.studentId = decoded.studentId;
      next();
    } else {
      res.status(404).send("You are not authorized to access this data.");
    }
  }
};

module.exports = { authMiddleware };
