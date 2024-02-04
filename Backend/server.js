require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;

app.get("/home", (req, res) => {
  res.status(200).json({ message: "connected to db" });
});



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port ', process.env.PORT);
        });
    })
    .catch((err) => console.log(err));



module.exports = app;
