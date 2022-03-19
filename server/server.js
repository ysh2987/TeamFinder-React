const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./api/posts');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`✔ Listening on : http://localhost:${port}`);
});
