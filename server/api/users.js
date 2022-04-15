const express = require('express');

const users = [
  { id: 'test1', pw: 'test1', nickname: '강아지' },
  { id: 'test2', pw: 'test2', nickname: '고양이' },
  { id: 'test3', pw: 'test3', nickname: '두더지' },
  { id: 'test4', pw: 'test4', nickname: '호랑이' },
];

// Route
const usersRouter = express.Router();

usersRouter.post('/users', (req, res) => {
  let state = false;
  let userData = {};
  users.forEach((user) => {
    if (user.id === req.body.id && user.pw === req.body.pw) {
      state = true;
      userData.id = user.id;
      userData.nickname = user.nickname;
    }
  });
  if (state) {
    // 로그인 성공
    res.send({ state: state, data: userData });
  } else {
    // 로그인 실패
    res.send({ state: state });
  }
});

module.exports = usersRouter;
