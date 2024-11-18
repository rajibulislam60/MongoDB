const express = require("express");
const DBconnection = require("./config/dbconfig");

const app = express();

DBconnection()
app.get("/", (req, res) => {
  res.send("mongodb");
});

app.listen(3000, () => {
  console.log("server is running");
});
