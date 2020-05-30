const db = require('../../database/dbconfig');

module.exports = {
  getCategories,
  addCategory,
  editCategories,
  deleteCategory,
}

const getCategories = () => {
  return db('categories');
}

const addCategory = (category) => {
  return db('categories').insert(category, 'id');
}

const editCategories = (changes, id) => {
  return db('categories').where({ id }).update(changes);
}

const deleteCategory = (id) => {
  return db('categories').where({ id }).del();
}

