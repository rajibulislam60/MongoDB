const { mongoose } = require("mongoose");

function DBconnection() {
  try {
    mongoose.connect(
      "mongodb+srv://crud:rajibul60@cluster0.3djni.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"
    ).then(()=>{
        console.log('database connected')
    })
  } catch (error) {
    console.log('err')
  }
}

module.exports = DBconnection;
