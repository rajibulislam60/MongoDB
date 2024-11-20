const mongoose = require("mongoose");

const { Schema } = mongoose;

let todoSchema = new Schema({
  name: String,
});

module.exports = mongoose.model("Todo", todoSchema);
