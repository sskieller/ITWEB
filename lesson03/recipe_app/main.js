"use strict";

//console.log("Start from page 348 in pdf");

const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  subscriberController = require('./controllers/subscriberController'),
  layouts = require("express-ejs-layouts");

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/recipe_db",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`)
});
mongoose.connection.on('error', (error) =>{
  console.log(`Mongoose connection error: `, error);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// For nodemon restart
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.once('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.once('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(homeController.logRequestPaths);

app.get("/name", homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendReqParam);

app.get("/subscribers", subscriberController.getAllSubscribers,
  (req, res, next) => {
    console.log((Date(Date.now)).toString());
    console.log(req.data);
    res.render("subscribers", { subscribers: req.data });
  });

app.get("/", homeController.index);

app.get("/courses", homeController.showCourses);

app.get("/contact", subscriberController.getSubscriptionPage);

app.post("/subscribe", subscriberController.saveSubscriber);


app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});