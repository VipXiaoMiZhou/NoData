const http = require('http');
const https = require('https');

/**
  1, This is a unit entrance to tomcat.
**/
module.exports = {
  userAuthorized : (username, password) => {
    return true;
  }
}
