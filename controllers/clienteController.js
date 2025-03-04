const Cliente = require('../models/cliente');
const validationErrors = require('./validationController');

// Crear nuevo cliente
exports.registrarCliente = async (req, res,next) => {
    
    try {
        const validationResult = validationErrors(req, res);
        if (validationResult) {
            return;
        }
        const nuevoCliente = await Cliente.create(req.body);
        res.status(201).json(nuevoCliente);
    } catch (error) {
        //Manejo centralizado de errores
        next(error);
    }
};