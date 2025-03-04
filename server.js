const express = require('express');
const dotenv = require('dotenv');
const sequelize= require('./db/database');

// Cargar las variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();
app.use(express.json());

// Rutas
app.use('/api/clientes', require('./routes/clienteRoutes'));
app.use('/api/actividades', require('./routes/actividadesRoutes'));

// Middleware para manejo general de los errores
app.use((err, req, res, next) => {
  console.error('Error inesperado:', err);
  res.status(500).json({ message: 'Ocurrió un error en el servidor (Middleware)' });
});

//Sincronizar la base de datos y levantar el servidor
sequelize.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(process.env.PORT || 3000, () => console.log(`Servidor en puerto ${process.env.PORT || 3000}`));
    })
    .catch(err => console.log('Error al sincronizar la BD:', err));