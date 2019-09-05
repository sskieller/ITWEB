"use strict"

const express = require('express'), // Require express
    app = express(), // Instantiate the express application
    homeController = require('./controllers/homeController'),
    errorController = require('./controllers/errorController'),
    layouts = require('express-ejs-layouts');

app.set("port", process.env.PORT || 3000);
// Using express templates
app.set("view engine", "ejs");
app.use(layouts);

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(express.static("public"));

// Adding routes created in homeController
app.get("/", homeController.homePage);
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postSignUpForm);


// Error handling
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);


app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});