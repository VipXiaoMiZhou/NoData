var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('profile', {title : 'Express', user: req.session.user})
});

router.post('/', function(req, res) {
  res.json({'name':'XiaoMiZhou','age':18});
});

module.exports = router;
