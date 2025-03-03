const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const Cliente = require('./cliente');

const Actividad = sequelize.define('Actividad', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(50), allowNull: false },
  fecha: { type: DataTypes.DATE, allowNull: false },
  descripcion: { type: DataTypes.STRING(200), allowNull: true },
  cupo: { type: DataTypes.INTEGER, allowNull: false },
  clienteId: { type: DataTypes.INTEGER, allowNull: false }
}, {
  timestamps: false,
  tableName: 'actividad'
});

Actividad.belongsTo(Cliente, { as: 'cliente', foreignKey: 'clienteId' });

module.exports = Actividad;