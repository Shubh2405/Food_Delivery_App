// controllers/pricingController.js

const PricingService = require('../services/pricingService');
async function calculateTotalPrice(req, res) {
    try {
      // Extract input parameters from the request body
      const { zone, organizationId, totalDistance, itemType } = req.body;
  
      // Call the PricingService to calculate the total price
      const totalPrice = await PricingService.calculateTotalPrice(zone, organizationId, totalDistance, itemType);
  
      // Send the total price in the response
      res.json({ total_price: totalPrice });
    } catch (error) {
      // Handle errors
      console.error('Error calculating total price:', error);
      res.status(500).json({ error: 'Failed to calculate total price' });
    }
  }
  
  module.exports = {
    calculateTotalPrice
  };