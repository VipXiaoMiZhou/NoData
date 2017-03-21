var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  if(!req.session.user){
    res.send("Pls login first");
  }else{
    res.render('management', {title : 'Express'});
  }
});

module.exports = router;
