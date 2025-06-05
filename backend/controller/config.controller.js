const db = require("../config/db_config");

const createTasksTable = (req, res) => {
  db.execute(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT FALSE
    )
  `)
    .then(() => {
      return res.send('Table "tasks" created successfully');
    })
    .catch((err) => {
      return res.status(500).send('Error creating table: ' + err.message);
    });
};

module.exports = {createTasksTable};