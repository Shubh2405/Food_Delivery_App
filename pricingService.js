// pricingService.js

// Import necessary models and modules
const Pricing = require('./pricingModel');

class PricingService {
  /**
   * Calculate the total price for food delivery based on input parameters
   * @param {string} zone - Delivery zone
   * @param {string} organizationId - Organization ID
   * @param {number} totalDistance - Total distance for delivery
   * @param {string} itemType - Type of item (perishable or non-perishable)
   * @returns {number|null} - Total price for delivery or null if pricing data not found
   */
  static async calculateTotalPrice(zone, organizationId, totalDistance, itemType) {
    try {
      // Retrieve pricing data from the database
      const pricingData = await Pricing.findOne({
        where: {
          organizationId,
          zone
        }
      });

      console.log("Pricing Data:", pricingData); // Log retrieved pricing data

      // If pricing data not found, return null
      if (!pricingData) {
        console.log("Pricing data not found");
        return null;
      }

      // Calculate the total price based on the pricing data and input parameters
      let totalPrice = pricingData.basePrice; // Base price

      if (totalDistance > pricingData.baseDistance) {
        const additionalDistance = totalDistance - pricingData.baseDistance;
        const additionalPrice = additionalDistance * pricingData.perKmPrice;
        totalPrice += additionalPrice;
      }

      // Adjust the price based on the item type (perishable or non-perishable)
      if (itemType === 'perishable') {
        totalPrice += totalPrice * 0.5; // Increase price by 50% for perishable items
      }

      // Round totalPrice to two decimal places
      totalPrice = Math.round(totalPrice * 100) / 100;

      console.log("Total Price:", totalPrice); // Log calculated total price

      return totalPrice;
    } catch (error) {
      console.error(`Failed to calculate total price: ${error.message}`);
      throw new Error(`Failed to calculate total price: ${error.message}`);
    }
}

}

module.exports = PricingService;
