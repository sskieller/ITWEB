'use strict'

const express = require('express');
const router = express.Router();
const controllerStudents = require('../controllers/students');

// Student locations
router.get('/', controllerStudents.students);

module.exports = router;