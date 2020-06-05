const db = require('../../database/dbconfig');

module.exports = {
  getCategories,
  addCategory,
  editCategories,
  deleteCategory,
}

/** GET ALL CATEGORIES */
function getCategories() {
  return db('categories');
}

/**ADD A CATEGORY */
function addCategory(category) {
  return db('categories').insert(category, 'id');
}

/** CHANGE A CATEGORY */
function editCategories(changes, id) {
  return db('categories').where({ id }).update(changes);
}

/** DELETE A CATEGORY */
function deleteCategory(id) {
  return db('categories').where({ id }).del();
}

