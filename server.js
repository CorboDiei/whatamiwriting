// This is the server module that does the non-calculation side of the backend
// Author: David Corbo
// Last Edited: 6/13/20

//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { spawn } = require("child_process");
const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/compute", (req, res) => {
  var data = req.body.mat;
  const value = runScript(data);
  value.stdout.on("data", (data) => {
    console.log(data.toString());
    res.send(data.toString());
  });
  value.stderr.on("data", (data) => {
    console.log("err: " + data);
  });
  value.on("close", (code) => {
    console.log("Subprocess ended with code " + code);
    value.stdin.end();
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

function runScript(data) {
  return spawn("python", [
    path.join(__dirname, "scripts/guess.py"),
    "--data",
    data,
  ]);
}
