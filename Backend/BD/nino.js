const mongoose = require('mongoose');

const ninoSchema = new mongoose.Schema({
  nombre: String,
  pin: String,
});

module.exports = mongoose.model('Nino', ninoSchema);