const express = require("express")
const DBconnection = require("./config/dbconfig")
const todoSchema = require("./model/todoSchema")

const app = express()
app.use(express.json())

DBconnection()
app.post("/createtask", async (req, res) => {
  let { task } = req.body
  let createtodo = new todoSchema({
    task,
  })
  await createtodo.save();
  res.status(201).send({ success: "created" })
})

app.listen(3000, () => {
  console.log("server is running")
})
