var express = require('express');
var router = express.Router();
var userdao = require('../dao/userdao/userdao');

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('register', {title : 'Express', user: req.session.user});
});

router.post('/', function(req, res) {

  var repassword = req.body.repassword;
  var password = req.body.password;

  userdao.register(req,res);
});

module.exports = router;
