var express = require('express');
var authorized = require('../module/Authorized');
var router = express.Router();

/* GET login page. */
router.get('/', (req, res) => {
  res.render('login', {title : 'Express'});
});

/*post data*/
router.post('/', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  if (authorized.userAuthorized(username, password)){
    // add username to session
    if(!req.session.user){
      req.session.user = username;
    }else {
      req.session.user = username;
    }
    res.redirect('/management');
  }else{
    res.redirect('/login');
  }
});
module.exports = router;
