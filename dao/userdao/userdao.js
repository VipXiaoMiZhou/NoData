const pool  = require('../mysqlpool');
const $sql = require('./sql');

module.exports = {
  verification:function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;

    pool.getConnection(function(err, connection) {
      // Use the connection
      connection.query($sql.verification,[username], function (error, results, fields) {
        // And done with the connection.
        if(results != undefined && results.length > 0){
          if(results[0].password != password){
            req.session.error = "username or password is wrong !";
            res.redirect('/login');
          }
          if(!req.session.user){
            req.session.user = username;
          }
          res.redirect('/management');
        } else{
          req.session.error = "username or password is wrong !";
          res.redirect('/login');
        }
        connection.release();
        // Handle error after the release.
        if (error) throw error;
        // Don't use the connection here, it has been returned to the pool.
      });
    });
  },

  register : function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    pool.getConnection(function(err, connection) {
      connection.query($sql.register,[username,password], function (error, results, fields) {
        // And done with the connection.
        if(undefined != results){
          req.session.info = "Successfully register, please login!";
          res.redirect('/login');
        }
        connection.release();
        // Handle error after the release.
        if (error) throw error;
      // Don't use the connection here, it has been returned to the pool.
      });
    });
  },

  addUser : function(username){
    pool.getConnection(function(err, connection) {
      // Use the connection
      connection.query($sql.verification,[username], function (error, results, fields) {
        // And done with the connection.
        console.log(results[0].password);

        connection.release();
        // Handle error after the release.
        if (error) throw error;
        // Don't use the connection here, it has been returned to the pool.
      });
    });
  }


}
