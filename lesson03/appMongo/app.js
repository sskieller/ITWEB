const  createError = require('http-errors');
const  express = require('express');
const  path = require('path');
const  cookieParser = require('cookie-parser');
const  logger = require('morgan'),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  subscribersController = require("./controllers/subscribersController"),

const  indexRouter = require('./routes/index');
const  usersRouter = require('./routes/users');

const mongoose = require('mongoose');
const app = express();

const subscriberController = require('./controllers/subscribersController');

// Connecting to mongodb database using mongoose
mongoose.connect("mongodb://localhost:27017/recipedb",
  {useNewUrlParser:true});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected MongoDB using Mongoose");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeController.logRequestPaths);

app.get("/name", homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendReqParam);

app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
  res.render("subscribers", { subscribers: req.data });
});

app.get("/", homeController.index);
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedContactForm);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

// Pass request to the getAllSubscribers function
app.get("/subscribers", subscriberController.getAllSubscribers),
  (req,res,next) => {
    // Log data from the request object
    console.log(req.data);
    // Render the data on the browser window
    res.send(req.data);
  };

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
