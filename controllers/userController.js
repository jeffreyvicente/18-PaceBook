// Should just be like studentContoller.js
//User = Student
// Thought = course 

const { ObjectId } = require('mongoose').Types;
//imports Thought and Uses in the ../models.
const { User, Thought } = require('../models');

const headCount = async () => {
    const numberOfUsers = await User.aggregate()
      .count('userCount');
    return numberOfUsers;
  }

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();

      const userObj = {
        users,
        headCount: await headCount(),
      };

      console.log("Getting all users");
      console.log(userObj);
      res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single User
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a user and remove them from the course
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }

      const thought = await Thought.findOneAndUpdate(
        { user: req.params.userId },
        { $pull: { users: req.params.userId } },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({
          message: 'User deleted, but no courses found',
        });
      }

      res.json({ message: 'User successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Add an reaction to a user
  async addReaction(req, res) {
    console.log('You are adding an assignment');
    console.log(req.body);

    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeReaction(req, res) {
    try {
      //console.log(res);
      //console.log(req);
      const thought  = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: {_id: req.params.reactionId} } },
        { runValidators: true, new: true }
      );

      console.log(thought);
  
      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }
  
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },


  // Remove friend from a user
  async removeFriend(req, res) {
    try {
      //console.log(res);
      //console.log(req);
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      console.log(user);
  
      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }
  
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Add a friend to a user.
  async addFriend(req, res) {
    console.log('You are adding an friend');
    console.log(req.body);

    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
// Updates a users information
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      console.log(user);

      if (!user) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },


};
