const express = require('express');
const router = express.Router();
const controllerIndex = require('../controllers/main');

// Index locations
router.get('/', controllerIndex.index);

module.exports = router;