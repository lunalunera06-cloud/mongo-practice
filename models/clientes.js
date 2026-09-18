const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    correo: { type: String, required: true, trim: true, lowercase: true },
    productoInteres: { type: String, required: true, trim: true },
    fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cliente', clienteSchema);

