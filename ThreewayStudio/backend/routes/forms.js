const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Get all 
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve ' });
  }
});

// Search by title, author, or category
router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const forms = await Form.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { author: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
      ],
    });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search' });
  }
});

// Add a new 
router.post('/', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create book' });
  }
});

// Update 
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const form = await Form.findByIdAndUpdate(id, req.body, { new: true });
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update' });
  }
});

// Delete 
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Form.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete ' });
  }
});

module.exports = router;
