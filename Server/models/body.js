const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const bodySchema = new Schema({
  home1: String,
  home2: String,
  about1: String,
  about2: String,
  about3: String,
  about4: String
});

module.exports = mongoose.model('body',bodySchema);