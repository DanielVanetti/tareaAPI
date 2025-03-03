const { Sequelize } = require('sequelize');
require('dotenv').config();

class Database {
    constructor() {
      if (!Database.instance) {
          this.sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
                host: process.env.DB_HOST,
                port: process.env.DB_PORT || 3306,
                //port:3306,
                dialect: 'mysql',
            });
            this.connect();
            Database.instance = this;
        }
        return Database.instance;
    }
    
    connect() {
        this.sequelize.authenticate()
        .then(() => console.log('Conectado a la base de datos MySQL'))
        .catch(err => console.log('No se pudo conectar a la base de datos:', err));
    }

    getSequelize() {return this.sequelize;}
  }
  
  module.exports = new Database().getSequelize();
