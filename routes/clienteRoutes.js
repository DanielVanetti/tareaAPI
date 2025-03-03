const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const clientesController = require('../controllers/clienteController');

// Registrar un cliente
router.post('/', 
    [
        body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ max: 50 }).withMessage('El nombre no puede tener más de 50 carácteres'),

        body('apellido1')
        .notEmpty().withMessage('El apellido1 es obligatorio')
        .isLength({ max: 40 }).withMessage('El apellido1 no puede tener más de 40 carácteres'),

        body('apellido2')
        .optional()
        .isLength({ max: 40 }).withMessage('El apellido2 no puede tener más de 40 carácteres'),

        body('correo')
        .notEmpty().withMessage('El correo es obligatorio')
        .isEmail().withMessage('El correo debe ser válido')
        .isLength({ max: 80 }).withMessage('El correo no puede tener más de 80 carácteres')
    ],
    clientesController.registrarCliente);

module.exports = router;
