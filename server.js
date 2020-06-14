// This is the server module that does the non-calculation side of the backend
// Author: David Corbo
// Last Edited: 6/13/20

//jshint esversion:6

const express = require("express");
const app = express();
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
