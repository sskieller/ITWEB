'use strict'

exports.getForHomePage = (req, res) => {
    res.send("Hello, Universe!");
    // Express information to console
    console.log("Params:");
    console.log(req.params);
    console.log("Body:");
    console.log(req.body);
    console.log("Url: ");
    console.log(req.url);
    // Query could be: http://localhost:3000/?cart=3&pagesVisited=4&utmcode=387283
    console.log("Query: ");
    console.log(req.query);
};


// Route parameters
exports.sendVegetable = (res, req) => {
    let veg = req.params.vegetable;
    res.send(`This is a page for ${veg}`);
};

// Middleware function targeted specifically at a certain url, here /items
exports.sendItems = () => {
    console.log(`request made to /items specifically`);
};

// Middleware function for logging request to console
exports.logUrl = (req, res, next) => {
    console.log(`request made to ${req.url}`);
    next();
};

// Routing with Express
exports.contactInfoSubmitted = (req, res) => {
    res.send("Contact information submitted successfully");
};

// Capturing posted data from request body
exports.dataFromBody = (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
};


exports.userSignUpProcessor = (req,res,next) => {
    console.log("Signup initiated");
    next();
};