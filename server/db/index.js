const Sequelize = require('sequelize');

const db = {}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mssql',
  dialectOptions: {
    encrypt: true
  }
});

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
