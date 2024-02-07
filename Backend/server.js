require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const jokeroutes = require("./routes/routes");
const userRoutes =require('./routes/user')


app.use(express.json());
app.use(cors());

app.use("/jokes", jokeroutes);
app.use('/user', userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db ", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));

module.exports = app;
