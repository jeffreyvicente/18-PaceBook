// Imports the required module to create a router
const router = require('express').Router();

// Imports the thoughtController functions
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    removeReaction,
    addReaction,
} = require('../../controllers/thoughtController')

// Route to handle GET and POST requests
router.route('/').get(getThoughts).post(createThought);

// Route to handle DELETE requests 
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

// Route to handle POST requests 
router.route('/:thoughtId/reactions').post(addReaction);

// Route to handle GET, PUT, and DELETE
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// Exports the router
module.exports = router;