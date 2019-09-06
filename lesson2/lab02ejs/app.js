const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const layouts = require('express-ejs-layouts');

const indexRouter = require('./app_server/routes/index');
const studentRouter = require('./app_server/routes/students');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_server')));

app.use(layouts);

app.use('/', indexRouter);
app.use('/students', studentRouter);

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


// <title><%= title %></title>  in layout

//TODO:
// Add form to new addStudent.ejs (p. 127)
// create routes for new page
// check controller for students.js
// Enable teacher to add student to list (p. 124-126)
// Make sure the list in students.ejs is showing the new student