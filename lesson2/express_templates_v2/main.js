'use strict'

// Setup
const express = require('express'),
    app = express(),
    homeController = require('./controllers/homeController'),
    layouts = require('express-ejs-layouts'),
    errorController = require('./controllers/errorController');
app.set("port", process.env.PORT || 3000);

// Using express templates
app.set("view engine", "ejs");
app.get("view engine");
// Using express layouts
app.use(layouts);

// Using express
app.use(
    express.urlencoded({
        extended:false
    })
);
app.use(express.json());

// Using static files with express
// This allows the application to load images using only the 
// relative path ~/images/bear.jpg
app.use(express.static("public"));


// index.ejs allows setting variables in html. Also sends this back with request to /name
// This function returns a rendering of a view. In this case the index.ejs view. 
respondWithName: app.get("/name/:myName", homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendVegetable);

app.post("/", (req,res) =>{
    console.log(req.body);
    console.log(req.query);
});

// Activating errorController
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondNoResourceFound);

// Setting up server dynamically for either the environment port or port 3000
app.listen(app.get("port"), () => {
    console.log(`Server running on port: ${app.get("port")}`);
});