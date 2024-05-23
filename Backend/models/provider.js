const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  nit: { type: String, required: true },
  nombre: { type: String, required: true },
  ciudad: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String, required: true }
});

module.exports = mongoose.model('Provider', providerSchema);
