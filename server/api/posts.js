const express = require('express');
const data = require('./data');

// Mock Data
let posts = [...data];

// Route
const apiRouter = express.Router();

// fuction
const getPostOwner = (id) => posts.filter((post) => post.owner.id === id);
const getMaxId = (items) => Math.max(...items.map(({ id }) => id), 0);

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

// create post
apiRouter.post('/posts', (req, res) => {
  // body is not null
  const { title, city, sportsTypes, content, date, owner } = req.body;

  try {
    const newPost = {
      id: getMaxId(posts) + 1,
      title,
      city,
      sportsTypes,
      content,
      date,
      recruit: true,
      comments: [],
      likeCount: 0,
      owner,
    };

    posts = [newPost, ...posts];

    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = apiRouter;
