const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const actividadesController = require('../controllers/actividadesController');
const Cliente = require('../models/cliente');

// Registrar una actividad
router.post('/', 
    [
    //Uso de express-validator para validar los campos

    body('nombre')
      .notEmpty().withMessage('El nombre es obligatorio')
      .bail()
      .isLength({ max: 50 }).withMessage('El nombre no puede tener más de 50 carácteres'),

    body('fecha')
      .notEmpty().withMessage('La fecha es obligatoria')
      .bail()
      .isDate().withMessage('La fecha debe ser válida (AAAA-MM-DD)'),

    body('descripcion')
      .optional()
      .isLength({ max: 200 }).withMessage('La descripción no puede tener más de 200 carácteres'),

    body('cupo')
      .notEmpty().withMessage('El cupo es obligatorio')
      .bail()
      .isInt().withMessage('El cupo debe ser un número entero'),
      
    body('clienteId')
      .notEmpty().withMessage('El cliente es obligatorio')
      .bail()
      .isInt({ min: 1 }).withMessage('El cliente debe ser un número entero positivo')
      .bail()
      .custom(async (value) => {
        const clienteExistente = await Cliente.findByPk(value);
        if (!clienteExistente) {
            throw new Error('El clienteId proporcionado no existe');
        }
    }),
    ],
    actividadesController.registrarActividad);

// Consultar una actividad por código
router.get('/:codigo', 
    [param('codigo').isInt().withMessage('El código de la actividad debe ser un número entero')],
    actividadesController.consultarActividad);

module.exports = router;
