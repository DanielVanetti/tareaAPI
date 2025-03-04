const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const clientesController = require('../controllers/clienteController');
const Cliente = require('../models/cliente');

// Registrar un cliente
router.post('/', 
    [
        body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .bail()
        .isLength({ max: 50 }).withMessage('El nombre no puede tener más de 50 carácteres'),

        body('apellido1')
        .notEmpty().withMessage('El apellido1 es obligatorio')
        .bail()
        .isLength({ max: 40 }).withMessage('El apellido1 no puede tener más de 40 carácteres'),

        body('apellido2')
        .optional()
        .isLength({ max: 40 }).withMessage('El apellido2 no puede tener más de 40 carácteres'),

        body('correo')
        .notEmpty().withMessage('El correo es obligatorio')
        .bail()
        .isEmail().withMessage('El correo debe ser válido')
        .bail()
        .isLength({ max: 80 }).withMessage('El correo no puede tener más de 80 carácteres')
        //Validación personalizada para verificar que el correo no esté registrado
        .custom(async (value) => {
            const correoExistente = await Cliente.findOne({ where: { correo: value } });
            if(correoExistente)
                {throw new Error('El correo ya está registrado')}
        })
    ],
    clientesController.registrarCliente);

// Obtener todos los clientes
router.get('/', clientesController.obtenerTodosLosClientes);

module.exports = router;
