const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const Cliente = sequelize.define('Cliente', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(50), allowNull: false },
  apellido1: { type: DataTypes.STRING(50), allowNull: false },
  apellido2: { type: DataTypes.STRING(50), allowNull: true },
  correo: { type: DataTypes.STRING(100), allowNull: false, unique: true }
}, {
  timestamps: false,
  tableName: 'cliente'
});

module.exports = Cliente;