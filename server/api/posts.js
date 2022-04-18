const express = require('express');
const data = require('./data');

// Mock Data
let posts = [...data];

// Route
const apiRouter = express.Router();

// fuction
const getPostOwner = (id) => posts.filter((post) => post.owner.id === id);

// GET
apiRouter.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

apiRouter.patch('/posts/setting/:ownerId', (req, res) => {
  const {
    params: { ownerId },
    body: { nickname },
  } = req;

  posts = posts.map((post) =>
    post.owner.id === ownerId
      ? {
          ...post,
          owner: { ...post.owner, nickname },
        }
      : post,
  );

  res.send(getPostOwner(posts));
});

apiRouter.get('/posts/setting/:ownerId', (req, res) => {
  const {
    params: { ownerId },
  } = req;
  res.send(getPostOwner(ownerId));
});

module.exports = apiRouter;
