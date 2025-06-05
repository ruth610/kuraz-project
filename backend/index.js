const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const router = require('./route/task_route');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});