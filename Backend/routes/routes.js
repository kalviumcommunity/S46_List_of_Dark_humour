const express = require("express");
const {
  createJoke,
  getJokes,
  getJoke,
  deleteJoke,
  updateJoke,
  getJokesByUser,
} = require("../controllers/jokeController");

const router = express.Router();

// GET all Jokes
router.get("/", getJokes);

// GET a single Joke
router.get("/:id", getJoke);

// GET a joke based on user
router.get("/:user", getJokesByUser);

// POST a new Joke
router.post("/", createJoke);

// DELETE a Joke
router.delete("/:id", deleteJoke);

// UPDATE a Joke
router.patch("/:id", updateJoke);

module.exports = router;