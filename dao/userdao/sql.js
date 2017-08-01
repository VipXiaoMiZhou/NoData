module.exports = {
  verification : 'SELECT `password` FROM `user` WHERE `username` = ?;',
  register: 'INSERT INTO `user`(`username`,`password`) values(?,?);'
}
