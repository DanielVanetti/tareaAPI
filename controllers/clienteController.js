const Cliente = require('../models/cliente');

// Crear nuevo cliente
exports.registrarCliente = async (req, res) => {
    try {
        const nuevoCliente = await Cliente.create(req.body);
        res.status(201).json(nuevoCliente);
    } catch (error) {
        //Manejo centralizado de errores
        next(error);
    }
};