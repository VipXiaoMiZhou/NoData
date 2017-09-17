module.exports = {
  verification : 'SELECT `password` FROM `user` WHERE `email` = ?;',
  register: 'INSERT INTO `user`(`email`,`username`,`password`) values(?,?,?);'
}
