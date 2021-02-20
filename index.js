const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./models/users");

const MONGO_URI =
  "mongodb+srv://admin:kAuOOf2e7vCyf9MR@mongodbtutorial.9kx8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();
app.use(express.json());

app.post("/user", async (req, res) => {
  try {
    let { userName, name } = req.body;
    console.log(req.body);
    if (!userName) return res.status(400).send({ err: "username is required" });
    if (!name) return res.status(400).send({ err: "name is required" });
    const user = new User(req.body);
    await user.save();
    return res.send({ user });
  } catch (error) {
    console.log(error);
  }
});

function home(req, res) {
  return res.send("hi hey");
}
function hi(req, res) {
  console.log("server Listening 3000!!");
}

app.get("/", home);

app.listen(8900, hi);
