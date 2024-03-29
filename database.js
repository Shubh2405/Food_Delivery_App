// config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'food_delivery_db',
  username: 'postgres',
  password: 'password',
  host: 'localhost', // or your database host
  port: 5432, // or your database port
  logging: false, // Set to true to enable logging
  swagger: {
    host: 'localhost:3000',
    // Other Swagger configurations
  },
});

module.exports = sequelize;

// const config = {
//   swagger: {
//     host: 'localhost:3000',
//     // Other Swagger configurations
//   },
// };
// module.exports = config;