const mongoose = require("mongoose");

const doubtSchema = mongoose.Schema(
  {
    studentId: String,
    subject: String,
    time: { type: Date, default: Date.now },
    doubt: String,
    language: String,
  },
  { versionKey: false }
);

const DoubtModel = mongoose.model("doubt", doubtSchema);

module.exports = { DoubtModel };
