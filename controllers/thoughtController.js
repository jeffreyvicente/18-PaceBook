// Should just be like courseContoller.js
// User = Student
// Thought = course 

//imports Thought and Uses in the ../models.
const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      // Returns an error if the query fails
      res.status(500).json(err);
    }
  },
  // Get a thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      // Returns an error if the thought does not exist 
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      // Returns the thought in a json in the command line
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      // Returns the thought in a json in the command line
      res.json(thought);
    } catch (err) {
      console.log(err);

      // Returns an error if the query fails
      return res.status(500).json(err);
    }
  },
  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      // Returns an error if the thought does not exist 
      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      await User.deleteMany({ _id: { $in: thought.user } });
      res.json({ message: 'Thought and User deleted!' });
    } catch (err) {
      // Returns an error if the query fails
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      // Returns an error if the thought does not exist 
      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      // Returns the thought in a json in the command line
      res.json(thought);
    } catch (err) {
      // Returns an error if the query fails
      res.status(500).json(err);
    }
  },
};
