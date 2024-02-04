const mongoose = require("mongoose");

const getJoke = (req, res) => {
  res.status(200).json({ message: "joke is ready to access" });
};

const getJokes = (req, res) => {
  res.status(200).json({ message: "joke is ready to display" });
};

const createJoke = (req, res) => {
  res.status(200).json({ message: "joke has been  created!" });
};

const updateJoke = (req, res) => {
  res.status(200).json({ message: "joke has been  updated!" });
};

const deleteJoke = (req, res) => {
  res.status(200).json({ message: "joke has been deleted" });
};

module.exports = {
  getJoke,
  getJokes,
  createJoke,
  updateJoke,
  deleteJoke,
};
