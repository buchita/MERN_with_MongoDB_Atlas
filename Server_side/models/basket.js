const mongoose = require('mongoose');

// declare the structure of the table for basket
const BasketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = Basket = mongoose.model('basket', BasketSchema);