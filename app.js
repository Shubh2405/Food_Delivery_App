// app.js

const sequelize = require('./config/database.js'); // Import your Sequelize instance
const models = require('./models/pricingModel.js'); // Import your Sequelize models
// const mod = require('./models/itemModel.js');
// const m = require('./models/pricingModel.js');

// Synchronize models with the database
sequelize.sync({ force: false }) // Set force to true to drop existing tables and re-create them
  .then(() => {
    console.log('Database synchronized successfully');
    // Start your server or perform other tasks
  })
  .catch((error) => {
    console.error('Database synchronization failed:', error);
  });

const express = require('express');
const pricingRoutes = require('./routes/pricingRoutes');

const app = express();

// Parse JSON request bodies
app.use(express.json());

// Use pricing routes
app.use('/api/pricing', pricingRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json'); // Replace with your generated Swagger specification

// Serve Swagger UI at /api-docs endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
