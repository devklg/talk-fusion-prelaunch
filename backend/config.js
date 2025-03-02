require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || 'your-mongodb-connection-string',
  JWT_SECRET: process.env.JWT_SECRET || 'your-jwt-secret-key'
};