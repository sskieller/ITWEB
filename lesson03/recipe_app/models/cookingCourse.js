"use strict"

const mongoose = require('mongoose');

const cookingCourseSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

module.exports = mongoose.model("cookingCourse", cookingCourseSchema);