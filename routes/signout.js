var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  req.session.user = null;
  res.redirect('/login');
});

module.exports = router;
