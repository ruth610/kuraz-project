const { validationResult } = require('express-validator');
const db = require('../config/db_config');

// Create a new task
const createTask = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, completed } = req.body;

    const [result] = await db.query(
      'INSERT INTO tasks (title, completed) VALUES (?, ?)',
      [title, completed]
    );

    return res.status(201).json({ id: result.insertId, title, completed });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Get all tasks (with optional filter)
const getTasks = async (req, res) => {
  try {
    const { completed } = req.query;
    let query = 'SELECT * FROM tasks';
    const params = [];

    if (completed !== undefined) {
      query += ' WHERE completed = ?';
      params.push(completed === 'true');
    }

    const [tasks] = await db.query(query, params);
    return res.json(tasks);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Get a task by ID
const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const [tasks] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);

    if (tasks.length === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.json(tasks[0]);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Delete a task by ID
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query('DELETE FROM tasks WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {createTask, getTasks, getTaskById, deleteTask};
