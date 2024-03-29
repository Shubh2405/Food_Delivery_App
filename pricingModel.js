// models/pricingModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');
const Organization = require('./orgModel');
const Item = require('./itemModel');

const Pricing = sequelize.define('Pricing', {
  organizationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Organization,
      key: 'id'
    }
  },
  itemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Item,
      key: 'id'
    }
  },
  zone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  baseDistanceInKm: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  kmPrice: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fixPrice: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Pricing;
