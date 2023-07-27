// Imports the required module to create a router
const router = require('express').Router();

// Imports the userRoutes module
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

//userRoutes for any requests starting with '/users'
router.use('/users', userRoutes);

//thoughtRoutes for any requests starting with '/thoughts'
router.use('/thoughts', thoughtRoutes);

// Exports the router
module.exports = router;
