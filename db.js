const { Sequelize } = require('sequelize');
const dbName = 'customer';
const dbUser = 'root';
const dbPassword = '';
// Option 1: Passing a connection URI
//const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: 'localhost',
  port : 3306,
  dialect: 'mysql'
}) // Example for postgres

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.customers = require('./customer.model')(sequelize, Sequelize);
module.exports = db;
