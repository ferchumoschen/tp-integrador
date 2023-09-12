const mongoose = require('mongoose');

const vestimentaSchema = new mongoose.Schema({
  Gorro: String,
  Remera: String,
  Pantalon: String,
  Zapatillas: String,
});

module.exports = mongoose.model('Vestimenta', vestimentaSchema);