const { Thought, Reaction } = require('../models');

const thoughtController = {
  // GET all thoughts
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch thoughts' });
    }
  },

  // GET a single thought by ID
  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch thought' });
    }
  },

  // POST a new thought
  createThought: async (req, res) => {
    try {
      const newThought = await Thought.create(req.body);
      res.status(201).json(newThought);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create thought' });
    }
  },

  // PUT to update a thought by ID
  updateThought: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        { new: true }
      );
      if (!updatedThought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json(updatedThought);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update thought' });
    }
  },

  // DELETE to remove a thought by ID
  deleteThought: async (req, res) => {
    try {
      const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!deletedThought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json(deletedThought);
    } catch (error) {
      res.status(400).json({ error: 'Failed to delete thought' });
    }
  },

  createReaction: async (req, res) => {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;
    console.log (thoughtId)
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $push: { reactions: req.body } },
        { new: true }
      );
      
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      return res.status(201).json(updatedThought);
    } catch (error) {
      console.error('Error creating reaction:', error);
      return res.status(500).json({ message: 'Error creating reaction' });
    }
  },

  deleteReaction: async (req, res) => {
    const { thoughtId, reactionId } = req.params;

    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { reactions: { _id: reactionId } } },
        { new: true }
      );

      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      return res.status(200).json(updatedThought);
    } catch (error) {
      console.error('Error deleting reaction:', error);
      return res.status(500).json({ message: 'Error deleting reaction' });
    }
  }
  
};



module.exports = thoughtController;
