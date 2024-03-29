const Joi = require('joi');

// Schema for validating the request payload for calculating total price
const calculateTotalPriceSchema = Joi.object({
  zone: Joi.string().required(),
  organizationId: Joi.string().required(),
  totalDistance: Joi.number().positive().required(),
  itemType: Joi.string().valid('perishable', 'non-perishable').required()
});

module.exports = {
  calculateTotalPriceSchema
};