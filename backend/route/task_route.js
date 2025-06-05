const express = require('express');
const router = express.Router();
const {createTask, getTasks,deleteTask,getTaskById} = require('../controller/task.controller');

// Route to create a new task
router.post('/tasks', createTask);
// Route to get all tasks
router.get('/tasks', getTasks);
// Route to get a task by ID
router.get('/tasks/:id', getTaskById);
// Route to delete a task by ID
router.delete('/tasks/:id', deleteTask);

module.exports = router;