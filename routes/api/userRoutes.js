// Imports the required module to create a router
const router = require('express').Router();

// Imports the userController functions
const { 
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    addReaction,
    removeReaction,
    updateUser,
    removeFriend,
    addFriend,
} = require('../../controllers/userController')

// Route to handle GET and POST requests to the base endpoint '/'
router.route('/').get(getUsers).post(createUser);

// Route to handle GET, DELETE, and PUT requests
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// Route to handle DELETE requests 
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

// Route to handle POST requests
router.route('/:thoughtId/reactions').post(addReaction);

// Route to handle DELETE and POST requests
router.route('/:userId/friend/:friendId').delete(removeFriend).post(addFriend);

// Exports the router
module.exports = router;