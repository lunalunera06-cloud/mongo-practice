require('dotenv').config();

const path = require('path');
const express = require('express');
const conectarBD = require('./config/db');
const Cliente = require('./models/clientes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.find().sort({ fechaRegistro: -1 });
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'No se pudieron obtener los clientes' });
    }
});

app.post('/api/clientes', async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/api/clientes/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndDelete(req.params.id);

        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: 'Identificador de cliente no válido' });
    }
});

const iniciarServidor = async () => {
    await conectarBD();

    app.listen(PORT, () => {
        console.log(`Página disponible en http://localhost:${PORT}`);
    });
};

iniciarServidor();