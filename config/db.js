// Import MySQL2
const mysql = require('mysql2');

// Create and configure the database connection pool
const db = mysql
  .createPool({
    host: 'localhost', // Database host
    user: 'root', // Replace with your actual root username
    password: 'Aravind@03', // Replace with your actual root password
    database: 'coreapp', // Database name
  })
  .promise(); // Enable async/await

// Export the connection
module.exports = db;
