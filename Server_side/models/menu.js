const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ingredient: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number
  }
});

module.exports = Menu = mongoose.model('menu', MenuSchema);