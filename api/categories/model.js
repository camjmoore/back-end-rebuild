const db = require('../../database/dbconfig');

module.exports = {
  getCategories,
  addCategory,
  editCategories,
  deleteCategory,
}

/** GET ALL CATEGORIES */
const getCategories = () => {
  return db('categories');
}

/**ADD A CATEGORY */
const addCategory = (category) => {
  return db('categories').insert(category, 'id');
}

/** CHANGE A CATEGORY */
const editCategories = (changes, id) => {
  return db('categories').where({ id }).update(changes);
}

/** DELETE A CATEGORY */
const deleteCategory = (id) => {
  return db('categories').where({ id }).del();
}

