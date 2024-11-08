const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: String,
  info: String, // Added if you want to include candidate information
  position: String,
  photo: String, // Assuming a path to the photo
});

const pollSchema = new mongoose.Schema({
  title: String,
  positions: Number,
  candidates: [candidateSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Poll', pollSchema);
