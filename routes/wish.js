var express = require('express');
var router = express.Router();
const Wish = require('../models/wish'); // your Mongoose model

// ===========================
// GET all wishes
// ===========================
router.get('/', async (req, res) => {
  try {
    const wishes = await Wish.find().sort({ createdAt: -1 }); // newest first
    res.json(wishes);
  } catch (error) {
    console.error("Error fetching wishes:", error);
    res.status(500).json({ error: "Could not fetch wishes" });
  }
});

// ===========================
// POST a new wish
// ===========================
router.post('/', async (req, res) => {
  try {
    const { wish } = req.body;

    if (!wish || wish.trim() === '') {
      return res.status(400).json({ error: "Wish text is required" });
    }

    const newWish = await Wish.create({ wish: wish.trim() });
    res.status(201).json(newWish);
  } catch (error) {
    console.error("Error saving wish:", error);
    res.status(500).json({ error: "Could not save wish" });
  }
});

// ===========================
// PUT / update a wish
// ===========================
router.put('/:id', async (req, res) => {
  try {
    const { wish } = req.body;
    if (!wish || wish.trim() === '') {
      return res.status(400).json({ error: "Wish text is required" });
    }

    const updatedWish = await Wish.findByIdAndUpdate(
      req.params.id,
      { wish: wish.trim() },
      { new: true }
    );

    if (!updatedWish) {
      return res.status(404).json({ error: "Wish not found" });
    }

    res.json(updatedWish);
  } catch (error) {
    console.error("Error updating wish:", error);
    res.status(500).json({ error: "Could not update wish" });
  }
});

// ===========================
// DELETE a wish
// ===========================
router.delete('/:id', async (req, res) => {
  try {
    const deletedWish = await Wish.findByIdAndDelete(req.params.id);

    if (!deletedWish) {
      return res.status(404).json({ error: "Wish not found" });
    }

    res.json({ message: "Wish deleted successfully" });
  } catch (error) {
    console.error("Error deleting wish:", error);
    res.status(500).json({ error: "Could not delete wish" });
  }
});

module.exports = router;
