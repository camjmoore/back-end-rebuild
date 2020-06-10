const db = require('../../database/dbconfig');

module.exports = {
  getUsers,
  register,
  findBy,
  deleteUser,
  getUsersRecipes,
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
  return db('users').select('id', 'user_name', 'password').where(filter);
}

/** DELETE A USER */
function deleteUser(id) {
  return db('users').where({ id }).del();
}

/** GET RECIPES BY USER ID */
function getUsersRecipes(id) {
  return db('users as u')
    .join('recipes as r', 'r.users_id', 'u.id')
    .where({ users_id: id })
    .select('r.*');
}