const express = require('express');
const { createTasksTable } = require('../controller/config.controller');
const router = express.Router();

router.get('/install', createTasksTable);

module.exports = router;