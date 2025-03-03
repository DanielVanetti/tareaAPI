const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const actividadesController = require('../controllers/actividadesController');

// Registrar una actividad
router.post('/', 
    [
    body('nombre')
      .notEmpty().withMessage('El nombre es obligatorio')
      .isLength({ max: 50 }).withMessage('El nombre no puede tener más de 50 carácteres'),

    body('fecha')
      .notEmpty().withMessage('La fecha es obligatoria')
      .isDate().withMessage('La fecha debe ser válida (AAAA-MM-DD)'),

    body('descripcion')
      .optional()
      .isLength({ max: 200 }).withMessage('La descripción no puede tener más de 200 carácteres'),

    body('cupo')
      .notEmpty().withMessage('El cupo es obligatorio')
      .isInt().withMessage('El cupo debe ser un número entero'),
      
    body('cliente')
      .notEmpty().withMessage('El cliente es obligatorio')
      .isInt().withMessage('El cliente debe ser un número entero')
    ],
    actividadesController.registrarActividad);

// Consultar una actividad por código
router.get('/:codigo', 
    [param('codigo').isInt().withMessage('El código de la actividad debe ser un número entero')],
    actividadesController.consultarActividad);

module.exports = router;
