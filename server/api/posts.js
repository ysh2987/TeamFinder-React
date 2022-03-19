const express = require('express');
const data = require('./data');

// Mock Data
const posts = [...data];

// Route
const apiRouter = express.Router();

// GET
apiRouter.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

module.exports = apiRouter;
