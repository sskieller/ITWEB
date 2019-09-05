"use strict"
// Exporting routes to main
exports.homePage = (req,res) => {
    res.render("index");
};

// See courses.ejs for example of how to use this
exports.showCourses = (req,res) => {
    res.render("courses",{
        offeredCourses: courses // Adding courses array
    });

};

exports.showSignUp = (req,res) => {
    res.render("contact");
};

exports.postSignUpForm = (req,res) => {
    res.render("thanks");
};

// Adding dynamic content to the courses view
var courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Magical Cup Cakes",
        cost: 150
    },
    {
        title: "Object Oriented Oranges",
        cost: 10
    }
]; // Array of courses