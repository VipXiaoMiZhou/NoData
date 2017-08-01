var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');

// route
var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var about = require('./routes/about');
var register = require('./routes/register');
var logout = require('./routes/logout');
var management = require('./routes/management');
var profile = require('./routes/profile');
var fgetpsd = require('./routes/fgetpsd');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  // for parsing application/x-www-form-urlencoded

app.use(cookieParser());
// session
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(function(req,res, next) {
  // ok
  res.locals.error = req.session.error;
  res.locals.user = req.session.user;
  res.locals.message = req.session.message;
  res.locals.success = req.session.success;
  next();
});





app.use(express.static(path.join(__dirname, 'public')));


// urls
app.use('/', routes);
app.use('/users', users);
app.use('/login', login);
app.use('/about', about);
app.use('/register', register);
app.use('/logout', logout);
app.use('/management', management);
app.use('/profile',profile);
app.use('/fgetpad',fgetpsd);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
