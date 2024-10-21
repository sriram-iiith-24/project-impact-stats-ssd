// backend/models/Paper.js
const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
    title: String,
    authors: [String],
    year: Number,
    doi: String,
    citations: Number,
});

module.exports = mongoose.model('Paper', paperSchema);
  