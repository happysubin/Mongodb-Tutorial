const express = require("express");
const { userRouter } = require("./router");
const mongoose = require("mongoose");
const { User } = require("./models/users");

const MONGO_URI =
  "mongodb+srv://admin:kAuOOf2e7vCyf9MR@mongodbtutorial.9kx8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();
app.use(express.json());
app.use("/user", userRouter);

function home(req, res) {
  return res.send("hi hey");
}

function hi(req, res) {
  console.log("server Listening 3000!!");
}

app.get("/", home);

app.listen(8900, hi);
