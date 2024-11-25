const express = require("express");
const DBconnection = require("./config/dbconfig");
const todoSchema = require("./model/todoSchema");

const app = express();
app.use(express.json());

DBconnection();

// Database Create---------------------------------
app.post("/createtask", async (req, res) => {
  let { task } = req.body;
  let createtodo = new todoSchema({
    task,
  });
  await createtodo.save();
  res.status(201).send({ success: "created", data: createtodo });
});

// Database Read-------------------------------------
app.get("/alltodo", async (req, res) => {
  let alltodo = await todoSchema.find({});
  res.status(200).send({ success: "data fetch successful", data: alltodo });
});

app.get("/singletodo/:id", async (req, res) => {
  let { id } = req.params;
  let singletodo = await todoSchema.findOne({ _id: id });
  res
    .status(200)
    ._construct({ success: "single fetch successful", data: singletodo });
});

// Database Delete-----------------------------------------------
app.delete("/deletetodo/:id", async (req, res) => {
  let { id } = req.params;
  let deletetodo = await todoSchema.findOneAndDelete({ _id: id });
  res.status(200).send({ success: "todo deleted", data: deletetodo });
});

// Database Update------------------------------------------------
app.patch("/updatetodo/:id", async (req, res) => {
  let { id } = req.params;
  let { task } = req.body;
  let updatetodo = await todoSchema.findOneAndUpdate(
    { _id: id },
    { task: task },
    { new: true }
  );
  res.status(200).send({ success: "updated successful", data: updatetodo });
});

app.listen(3000, () => {
  console.log("server is running");
});
