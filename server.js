const express = require('express');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

// Cargar las variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();
app.use(express.json());

// Conectar a la base de datos con Sequelize
const sequelize = new Sequelize(
  `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3307/${process.env.DB_NAME}`
);

// Verificar la conexión con la base de datos
sequelize.authenticate()
  .then(() => console.log('Conectado a la base de datos MySQL'))
  .catch(err => console.log('No se pudo conectar a la base de datos:', err));

// Rutas
app.use('/api/cliente', require('./routes/clientesRoutes'));
app.use('/api/actividades', require('./routes/actividadesRoutes'));

// Iniciar el servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
