const dataTypes=require('sequelize');
const sequelize=require('../db/database');
const cliente = require('./cliente');

const Actividad=sequelize.define('Actividad',{
   id:{type: dataTypes.INTEGER, primaryKey:true, autoIncrement:true},
   nombre:{type: dataTypes.STRING(50), allowNull:false},
   fecha:{type: dataTypes.DATE, allowNull:false},
   descripcion:{type: dataTypes.STRING(200), allowNull:true},
   cupo:{type: dataTypes.INTEGER, allowNull:false},
   cliente: {type: dataTypes.INTEGER, allowNull:false, references: {model: cliente, key: 'id'}},

});
Actividad.belongsTo(cliente, {foreignKey: 'cliente'});
module.exports=Actividad;