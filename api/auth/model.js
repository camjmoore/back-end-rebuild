const db = require('../../database/dbconfig');

module.exports = {
  getUsers,
  register,
  findBy,
  deleteUser
}

/** GET ALL USERS */
function getUsers() {
  return db('users');
}

 /** CREATE A USER */
function register(user) {
  return db('users').insert(user, 'id');
}

/** FIND A USER */
function findBy(filter) {
  return db('users').select('id', 'username', 'password').where(filter);
}

/** DELETE A USER */
function deleteUser(id) {
  return db('users').where({ id }).del();
}