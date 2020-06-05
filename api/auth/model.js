const db = require('../../database/dbconfig');

module.exports = {
  getUsers,
  register,
  findBy,
  deleteUser,
}

/** GET ALL USERS */
const getUsers = () => {
  return db('users');
}

 /** CREATE A USER */
const register = (users) => {
  return db('users').insert(users);
}

/** FIND A USER */
const findBy = (filter) => {
  return db('users').select('id', 'username', 'password').where(filter);
}

/** DELETE A USER */
const deleteUser = (id) => {
  return db('users').where({ id }).del();
}