const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  OrderID: String,
  From: String,  
  To: String,
  Quantity: String,
  Pickup:String,
  Transporter:String,
  Price: String

});

module.exports = mongoose.model('Form', formSchema);
