"use strict"

const port = 3000,
    express = require('express'),
    app = express(),
    homeController = require('./controllers/homeController');

// GET route for home page
app.get("/", (req, res) => {
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
})
    .listen(port, () => {
        console.log(`Express.js server has started and is listening on port: ${port}`);
    });

// Capturing posted data from request body
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

// Routing with Express
app.post("/contact", (req, res) => {
    res.send("Contact information submitted successfully");
});
// Middleware function for logging request to console
app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});
// Middleware function targeted specifically at a certain url, here /items
app.use("/items", (req, res, next) => {
    console.log(`request made to /items`);

});


// Capturing posted data from request body
app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
});

// Route parameters
app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is a page for ${veg}`);
});

// Route parameters
exports.sendVegetable = (res,req) => {
    let veg = req.params.vegetable;
    res.send(`This is a page for ${veg}`);
};