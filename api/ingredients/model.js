const db = require('../../database/dbconfig');

module.exports = {
  getIngredients,
  addIngredient,
  editIngredient,
  deleteIngredient,
}

/** GET ALL INGREDIENTS */
function getIngredients() {
  return db('ingredients');
}

/** SAVE AN INGREDIENT */
function addIngredient(ingredient) {
  return db('ingredients').insert(ingredient);
}

/** CHANGE AN INGREDIENT */
function editIngredient(changes, id) {
  return db('ingredients').where({ id }).update(changes);
}

/** DELETE AN INGREDIENT */
function deleteIngredient(id) {
  return db('ingredients').where({ id }).del();
}