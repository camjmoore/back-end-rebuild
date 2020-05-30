const db = require('../../database/dbconfig');

module.exports = {
  getRecipeIngredients,
  getIngredients,
  addIngredients,
  editIngredient,
  deleteIngredient,
}

/**GET ALL INGREDIENTS */
const getIngredients = () => {
  return db('ingredients');
}

/**GET INGREDIENTS FOR A RECIPE */
const getRecipeIngredients = () => {
  return db('recipe_ingredients')
}
 /**DEFINE ANOTHER AVAILABLE INGREDIENT */
const addIngredients = (ingredient) => {
  return db('ingredients').insert(ingredient);
}

const editIngredient = (changes, id) => {
  return db('ingredients').where({ id }).update(changes);
}

const deleteIngredient = (id) => {
  return db('ingredients').where({ id }).del();
}