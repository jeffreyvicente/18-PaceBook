const router = require('express').Router();

const { 
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    addReaction,
    removeReaction,
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser);

router.route('/:studentId').get(getSingleUser).delete(deleteUser);

router.route('/:studentId/reaction').post(addReaction);

router.route('/:studentId/reaction/:reactionId').delete(removeReaction);


module.exports = router;