const { timeStamp } = require("console");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jokeSchema = new Schema(
  {
    joke: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("asaps", jokeSchema);
