const mongoose = require('mongoose')

async function initDB() {
  try {
    await mongoose.connect("mongodb+srv://abhishekjoshi2030:Joshi%40123@cluster0.lhoxah5.mongodb.net/?retryWrites=true&w=majority"
    , { dbName: 'noteDB' })
    console.log("Connected to DB Successfully")
  } catch (err) {
    console.log("Error connecting to DB")
  }
}

module.exports = {
  initDB
}

