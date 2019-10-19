"use strict";

const router = require('express').Router(),
    errorController = require('../controllers/errorController');

// App open port
router.use(errorController.logErrors);
router.use(errorController.respondNoResourceFound);
router.use(errorController.respondInternalError);

module.exports = router;