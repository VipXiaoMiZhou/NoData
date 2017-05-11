var express = require('express');
var authorized = require('../module/Authorized');
var router = express.Router();

/* GET login page. */
router.get('/', (req, res) => {
  req.session.error = null;
  res.render('login', {title : 'Express', user: req.session.user});
});

/*post data*/
router.post('/', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  if (authorized.userAuthorized(username, password)){
    // add username to session
    if(!req.session.user){
      req.session.user = username;
    }
    res.redirect('/management');
  }else{
    req.session.error = "username or password is wrong !";
    res.redirect('/login');
  }
});
module.exports = router;
