const express = require("express");

const app = express();

function home(req, res) {
  return res.send("hi hey");
}
function hi(req, res) {
  console.log("server Listening 3000!!");
}

app.get("/", home);

app.listen(3000, hi);
