"use strict"; console.log("Start from page 359 in pdf");
const db = require('./db-init');
// Requires
const express = require("express"),
  app = express(),
  router = express.Router(),

  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  subscriberController = require('./controllers/subscriberController'),
  usersController = require('./controllers/usersController'),
  coursesController = require('./controllers/coursesController'),

  layouts = require("express-ejs-layouts"),
  logger = require('morgan'),
  path = require('path'),
  methodOverride = require('method-override'),
  expressValidator = require('express-validator'),

  expressSession = require('express-session'),
  cookieParser = require('cookie-parser'),
  connectFlash = require('connect-flash'),

  passport = require('passport');

// App set / use
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

router.use(express.json());
router.use(
  express.urlencoded({
    extended: false
  })
);
router.use(expressValidator());

router.use(cookieParser("secret_passcode_see_unit_8"));
router.use(expressSession({
  secret: "secret_passcode_see_unit_8",
  cookie: {
    maxAge: 4000000
  },
  resave: false,
  saveUninitialized: false
  })
);

// Security
router.use(passport.initialize());
router.use(passport.session());
const User = require('./models/user');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.use(connectFlash());
router.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  res.locals.loggedIn = req.isAuthenticated();
  res.locals.currentUser = req.user;
  next();
});

router.use(express.static(path.join(__dirname, 'public')));
router.use(layouts);

app.use(logger('dev'));

router.use(homeController.logRequestPaths);

router.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

// App routes
app.use("/", router);

app.get("/subscribers", subscriberController.index,
  (req, res, next) => {
    console.log((Date(Date.now)).toString());
    console.log(req.data);
    res.render("subscribers", { subscribers: req.data });
  });

app.get("/", homeController.index);
app.get("/contact", homeController.getSubscriptionPage);

// USERS
router.get("/users/login", usersController.login);
router.post("/users/login", usersController.authenticate);
router.get("/users/logout", usersController.logout, usersController.redirectView);
router.get("/users", usersController.index, usersController.indexView);
router.get("/users/new", usersController.new);
router.post("/users/create", usersController.validate, 
usersController.create, usersController.redirectView);
router.get("/users/:id", usersController.show, usersController.showView);
router.get("/users/:id/edit", usersController.edit);
router.put("/users/:id/update", usersController.update, usersController.redirectView);
router.delete("/users/:id/delete", usersController.delete, usersController.redirectView);

// COURSES
router.get("/courses", coursesController.index, coursesController.indexView);
router.get("/courses/new", coursesController.new);
router.post("/courses/create", coursesController.create, coursesController.redirectView);
router.get("/courses/:id", coursesController.show, coursesController.showView);
router.get("/courses/:id/edit", coursesController.edit);
router.put("/courses/:id/update", coursesController.update, coursesController.redirectView);
router.delete("/courses/:id/delete", coursesController.delete, coursesController.redirectView);

// SUBSCRIBERS
router.get("/subscribers",
subscriberController.index,
subscriberController.indexView);
router.get("/subscribers/new",
subscriberController.new);
router.post("/subscribers/create", 
subscriberController.create, 
subscriberController.redirectView);
router.get("/subscribers/:id", 
subscriberController.show, 
subscriberController.showView);
router.get("/subscribers/:id/edit",
subscriberController.edit);
router.put("/subscribers/:id/update",
subscriberController.update,
subscriberController.redirectView);
router.delete("/subscribers/:id/delete",
subscriberController.delete,
subscriberController.redirectView);

router.post("/subscribe", subscriberController.saveSubscriber);

// App open port
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});