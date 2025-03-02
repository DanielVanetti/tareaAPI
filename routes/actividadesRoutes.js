const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/actividadesController');

// Define la ruta GET para obtener items
router.get('/actividades', actividadesController.getItems);

// Define la ruta POST para crear un nuevo item
router.post('/actoividades', actividadesController.createItem);

router.get('/actividadeserror', actividadesController.getItemsError);


module.exports = router;