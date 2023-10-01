const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
  }],
  totalPrice: Number,
  // other order-related fields
});

module.exports = mongoose.model('Order', orderSchema);
