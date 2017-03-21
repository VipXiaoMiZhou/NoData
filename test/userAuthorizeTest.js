var express = require('express')
var session = require('express-session')

var app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(function (req, res, next) {
  var user = req.session.user
  if (!user) {
    user = req.session.user = {}
  }
  next();
})

app.get('/foo', function (req, res, next) {
  console.log(req.session);
  res.send('you viewed this page ' + req.session + ' times')
})

app.get('/bar', function (req, res, next) {
  console.log(req.session);
  res.send('you viewed this page ' + req.session.user + ' times')
})


var server = app.listen(6060, function() {
  console.log('Express server listening on port 6060');
});
