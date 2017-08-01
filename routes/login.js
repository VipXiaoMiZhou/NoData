var express = require('express');
var router = express.Router();
var userdao = require('../dao/userdao/userdao');

/* GET login page. */
router.get('/', (req, res) => {
  req.session.error = null;
  res.render('login', {title : 'Express', user: req.session.user});
});

/*post data*/
router.post('/', (req, res) => {
  userdao.verification(req,res);
});
module.exports = router;
