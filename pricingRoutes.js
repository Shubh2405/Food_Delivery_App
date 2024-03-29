// routes/pricingRoutes.js

const express = require('express');
const router = express.Router();
const pricingController = require('./pricingController');

// POST request to calculate the total price for food delivery
router.post('/calculate-price', pricingController.calculateTotalPrice);

module.exports = router;

