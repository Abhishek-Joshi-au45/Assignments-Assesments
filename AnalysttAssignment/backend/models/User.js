const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  Fname: String,
  age : Number,
  email: String,
  DOB: Date,
});

module.exports = mongoose.model('User', userSchema);
