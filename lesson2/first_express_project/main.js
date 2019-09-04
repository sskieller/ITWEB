"use strict"

const port = 3000,
    express = require('express'),
    app = express(),
    homeController = require('./controllers/homeController');

// Capturing posted data from request body
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());


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

// Routing with Express
app.post("/contact", homeController.contactInfoSubmitted);

// Middleware function for logging request to console
app.use(homeController.logUrl);

// Middleware function targeted specifically at a certain url, here /items
app.use("/items", homeController.sendItems);

// Capturing posted data from request body
app.post("/", homeController.dataFromBody);

// Route parameters
app.get("/items/:vegetable", homeController.sendVegetable);

app.post("/sign_up", homeController.userSignUpProcessor);

app.get("/sign_up", homeController.userSignUpProcessor);