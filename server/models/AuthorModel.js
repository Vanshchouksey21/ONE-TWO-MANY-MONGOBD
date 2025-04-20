const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  bookid: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Book',
    default: []
  }
});

module.exports = mongoose.model('Author', authorSchema);
