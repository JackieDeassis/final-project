const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
  wish: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Wish', wishSchema);
