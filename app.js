const express = require('express');
const app = express();

// Import function from helpers.js
const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');

// Define mean endpoint
app.get('/mean', (req, res) => {
  if (!req.query.nums) {
    return res.status(400).json({ error: 'nums are required' });
  }

  const numsAsStrings = req.query.nums.split(',');
  const nums = convertAndValidateNumsArray(numsAsStrings);

  if (nums instanceof Error) {
    return res.status(400).json({ error: nums.message });
  }

  const mean = findMean(nums);

  return res.json({ operation: 'mean', value: mean });
});

// Define median endpoint
app.get('/median', (req, res) => {
  if (!req.query.nums) {
    return res.status(400).json({ error: 'nums are required' });
  }

  const numsAsStrings = req.query.nums.split(',');
  const nums = convertAndValidateNumsArray(numsAsStrings);

  if (nums instanceof Error) {
    return res.status(400).json({ error: nums.message });
  }

  const median = findMedian(nums);

  return res.json({ operation: 'median', value: median });
});

// Define endpoint for mode
app.get('/mode', (req, res) => {
  if (!req.query.nums) {
    return res.status(400).json({ error: 'nums are required' });
  }

  const numsAsStrings = req.query.nums.split(',');
  const nums = convertAndValidateNumsArray(numsAsStrings);

  if (nums instanceof Error) {
    return res.status(400).json({ error: nums.message });
  }

  const mode = findMode(nums);

  return res.json({ operation: 'mode', value: mode });
});


app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
