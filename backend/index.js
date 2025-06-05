const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const router = require('./route/task_route');
const dbRouter = require('./route/db_route');
const db = require('./config/db_config');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', dbRouter);
app.use('/api', router);

async function start() {
  try {
    await db.execute("SELECT  'test'");
    console.log("database connection established");
    await app.listen(port);
    console.log(`listening on port:${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();