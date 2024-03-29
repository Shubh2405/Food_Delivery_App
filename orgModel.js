// models/orgModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Organization = sequelize.define('Organization', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Organization;
