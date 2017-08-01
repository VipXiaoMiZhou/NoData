var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res) {
  res.render('fgetpsd', {title : 'Express', user: req.session.user});
});

module.exports = router;
