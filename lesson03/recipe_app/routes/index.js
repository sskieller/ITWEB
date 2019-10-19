"use strict";

const router = require('express').Router(),
    userRoutes = require('../routes/userRoutes'),
    subscriberRoutes = require('../routes/subscriberRoutes'),
    courseRoutes = require('../routes/courseRoutes'),
    errorRoutes = require('../routes/ErrorRoutes'),
    homeRoutes = require('../routes/homeRoutes');

router.use("/users", userRoutes);
router.use("/subscribers", subscriberRoutes);
router.use("/courses", courseRoutes);
router.use("/", homeRoutes);
router.use("/", errorRoutes);


module.exports = router;