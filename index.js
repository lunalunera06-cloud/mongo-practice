require('dotenv').config();
const mongoose = require('mongoose');
const conectarBD = require('./config/db');
const Cliente = require('./models/clientes');

const ejecutarOperaciones = async () => {
    await conectarBD();

    try {
        const nuevoCliente = new Cliente({
            nombre: 'Cliente Ejemplo',
            correo: 'cliente@cafeyaroma.com',
            productoInteres: 'Café Orgánico Tueste Especial (1kg)'
        });

        const clienteGuardado = await nuevoCliente.save();
        console.log(clienteGuardado);

        const listaClientes = await Cliente.find();
        console.dir(listaClientes, { depth: null });
    } catch (error) {
        console.error('Error en las operaciones:', error.message);
    } finally {
        await mongoose.disconnect();
    }
};

ejecutarOperaciones();