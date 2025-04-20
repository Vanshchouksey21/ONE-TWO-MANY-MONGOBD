const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bookid: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  }]
});

module.exports = mongoose.model('Author', AuthorSchema);
