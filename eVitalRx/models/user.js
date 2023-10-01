const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // other user-related fields
});

module.exports = mongoose.model('User', userSchema);
