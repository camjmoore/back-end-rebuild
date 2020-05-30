const db = require('../../database/dbconfig');

module.exports = {
  getRecipeIngredients,
  getIngredients,
  addIngredients,
  editIngredient,
  deleteIngredient,
}

/** GET ALL INGREDIENTS */
const getIngredients = () => {
  return db('ingredients');
}

/** SAVE AN INGREDIENT */
const addIngredients = (ingredient) => {
  return db('ingredients').insert(ingredient);
}

/** CHANGE AN INGREDIENT */
const editIngredient = (changes, id) => {
  return db('ingredients').where({ id }).update(changes);
}

/** DELETE AN INGREDIENT */
const deleteIngredient = (id) => {
  return db('ingredients').where({ id }).del();
}