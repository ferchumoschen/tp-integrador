const mongoose = require('mongoose');

// Reemplaza 'mongodb://localhost/tu_basededatos' con la URL de tu base de datos
const mongoURI = 'mongodb://localhost/tu_basededatos';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;