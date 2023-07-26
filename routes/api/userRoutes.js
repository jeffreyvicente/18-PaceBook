const router = require('express').Router();

const { 
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    addReaction,
    removeReaction,
    updateUser,
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

router.route('/:userId/reaction').post(addReaction);

router.route('/:userId/reaction/:friendId').delete(removeReaction);


module.exports = router;