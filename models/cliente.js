const dataTypes=require('sequelize');
const sequelize=require('../db/database');

const Cliente=sequelize.define('Cliente',{
    id:{type: dataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    nombre:{type: dataTypes.STRING(50), allowNull:false},
    apellido1:{type: dataTypes.STRING(40), allowNull:false},
    apellido2:{type: dataTypes.STRING(40), allowNull:true},
    correo:{type: dataTypes.STRING(80), allowNull:false},
});
module.exports=Cliente;