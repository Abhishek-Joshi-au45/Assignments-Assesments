const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  coverImage: String,
  price: Number,
  ratings: Number,
  category: String,
  publicationDate: Date,
});

module.exports = mongoose.model('Book', bookSchema);
