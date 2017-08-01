const mysql = require('mysql');
module.exports = mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  user            : 'root',
  password        : '****',
  database        : 'test'
});
