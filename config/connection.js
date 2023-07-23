// Imports the required modules from mongoose
const { connect, connection } = require('mongoose');

// Connection string for MongoDB
const connectionString = process.env.MONGDB_URI || 'mongdb://127.0.0.1:27017/pacebookDB';

// Establishes a connection to the MongoDB
connect(connectionString);

// Exports the connection object
module.exports = connection; 