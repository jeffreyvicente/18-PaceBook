// Imports the required module to create a router
const router = require('express').Router();

// Imports the API routes module
const apiRoutes = require('./api/');
router.use('/api', apiRoutes);

// If the request does not match any of the defined routes, this middleware will be executed
router.use((req, res) => res.send('Wrong route!'));

// Exports the router 
module.exports = router;