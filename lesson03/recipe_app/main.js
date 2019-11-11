"use strict"; 
const db = require('./db-init');
// Requires
const express = require("express"),
  app = express(),
  router = require('./routes/index'),
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



router.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});