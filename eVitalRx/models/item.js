const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  // other item-related fields
});

module.exports = mongoose.model('Item', itemSchema);
