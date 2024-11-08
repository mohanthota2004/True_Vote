const express = require('express');
const router = express.Router();
const Poll = require('../models/polls');

// Render the form
router.get('/', (req, res) => {
  res.render('create-poll');
});

router.post('/create', async (req, res) => {
  const { title, positions, candidates } = req.body;
  try {
    const newPoll = new Poll({ title, positions, candidates });
    await newPoll.save();
    res.redirect('/polls'); // Update route as needed
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});


module.exports = router;
