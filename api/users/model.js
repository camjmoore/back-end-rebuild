const db = require('../../database/dbconfig');

module.exports = {
  getUsers,
  addUsers,
  editUsers,
  deleteUsers,
}

/** GET ALL USERS */
const getUsers = () => {
  return db('users');
}

 /** SAVE AN USERS */
const addUsers = (users) => {
  return db('users').insert(users);
}

/** CHANGE AN USERS */
const editUsers = (changes, id) => {
  return db('users').where({ id }).update(changes);
}

/** DELETE AN USERS */
const deleteUsers = (id) => {
  return db('users').where({ id }).del();
}