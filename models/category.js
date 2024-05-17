const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: { // Change 'images' to 'image'
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true, // Fix the typo here, it should be 'required' not 'requiredd'
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var categoryModel = mongoose.model('categories', categorySchema);
module.exports = categoryModel;