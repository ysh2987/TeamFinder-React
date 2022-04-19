const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./api/posts');
const usersRouter = require('./api/users');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRouter);
app.use('/api', usersRouter);

app.listen(port, () => {
  console.log(`✔ Listening on : http://localhost:${port}`);
});
