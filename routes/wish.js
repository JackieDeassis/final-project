var express = require('express');
var router = express.Router();
const Wish = require('../models/wish'); // your model

/* GET all wishes */
router.get('/', async function(req, res, next) {
  try {
    const wishes = await Wish.find().sort({ createdAt: -1 });
    res.json(wishes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not fetch wishes" });
  }
});

/* POST a new wish */
router.post('/', async function(req, res, next) {
  try {
    const { wish } = req.body;
    const newWish = await Wish.create({ wish });
    res.json(newWish);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Could not save wish" });
  }
});

module.exports = router;
