"use strict";

const mongoose = require('mongoose'),
    Subscriber = require('../models/subscriber');

// Export getAllSubscribers to pass data from database to next middleware function
exports.getAllSubscribers = (req,res,next) => {
    // Query with "find" on the Subscriber model
    Subscriber.findOne( {}, (error, subscribers) =>{
        // Pass error to next middleware function
        if (error) next(error);
        // Set data that comes back from MongoDB on request object
        req.data = subscribers;
        // Continue to next middleware function
        next();
    });
};