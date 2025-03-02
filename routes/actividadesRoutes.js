const express = require('express');
const router = express.Router();
const actividadesController = require('../controllers/actividadesController');

// Registrar una actividad
router.post('/', actividadesController.registrarActividad);

// Consultar una actividad por código
router.get('/:codigo', actividadesController.consultarActividad);

module.exports = router;
