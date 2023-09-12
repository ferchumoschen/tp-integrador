const mongoose = require('mongoose');

const personajeSchema = new mongoose.Schema({
  color: String,
  pelo: String,
});

module.exports = mongoose.model('Personaje', personajeSchema);