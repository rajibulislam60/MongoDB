const mongoose = require("mongoose");

const { Schema } = mongoose;

let todoSchema = new Schema({
  task: {
    type: String,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
