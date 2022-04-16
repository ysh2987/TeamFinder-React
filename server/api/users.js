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

// 회원가입
usersRouter.post('/signup', (req, res) => {
  if (users.some((user) => user.id === req.body.id)) {
    res.send('0'); // id 중복: 0
  } else if (users.some((user) => user.nickname === req.body.nickname)) {
    res.send('1'); // 닉네임 중복: 1
  } else {
    users.push(req.body);
    res.send([req.body.id, req.body.nickname]);
  }
});

module.exports = usersRouter;
