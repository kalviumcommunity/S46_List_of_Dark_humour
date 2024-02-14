const Joke =require("../modals/jokeModel")
const mongoose = require("mongoose");

const getJoke = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "joke doesn't exist"})
    }

    const joke = await Joke.findById(id)

    if (!joke){
        return res.status(404).json({error: "joke doesn't exist"})
    }

    res.status(200).json(joke)
};

const getJokes = async (req, res) => {
    const jokes = await Joke.find({}).sort({createdAt: -1})

    res.status(200).json(jokes)
}

const getJokesByUser = async (req, res) => {
    const { userEmail } = req.params;

    try {
        const jokes = await Joke.find({ user: userEmail }).sort({ createdAt: -1 });
        res.status(200).json(jokes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const createJoke = async (req, res) => {
    const { joke, user } = req.body;
    console.log(joke,user)

    try {
        if (!joke || !user) {
            return res.status(400).json({ error: "Please provide a 'joke' and 'user' in the request body" });
        }
        const newJoke = await Joke.create({ joke, user: user });

        res.status(201).json(newJoke);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const updateJoke = async (req, res) => {
    const {id} = req.params

    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such joke"})
    }

    const joke = await Joke.findByIdAndUpdate({_id: id},req.body)

    if (!joke){
        return res.status(404).json({error: "No such joke"})
    }

    res.status(200).json(joke)
}

const deleteJoke = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such joke"})
    }

    const joke = await Joke.findOneAndDelete({_id: id})

    if (!joke){
        return res.status(404).json({error: "No such joke"})
    }

    res.status(200).json(joke)
}

module.exports = {
  getJoke,
  getJokes,
  getJokesByUser,
  createJoke,
  updateJoke,
  deleteJoke,
};