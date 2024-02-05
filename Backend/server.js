require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const jokeroutes = require("./routes/routes");

app.use(express.json());
app.use(cors());

app.use("/jokes", jokeroutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port ", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));

module.exports = app;
