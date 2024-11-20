const express = require("express");
const DBconnection = require("./config/dbconfig");
const todoSchema = require("./model/todoSchema");

const app = express();

DBconnection();
app.post("/", async (req, res) => {
  let todo = new todoSchema({
    name: "Rajibul",
  });
  let result = await todo.save();

  res.status(201).send(result);
});

app.listen(3000, () => {
  console.log("server is running");
});
