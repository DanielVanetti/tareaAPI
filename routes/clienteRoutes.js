const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clienteController');

// Registrar un cliente
router.post('/', clientesController.registrarCliente);

module.exports = router;
