const db = require('../../database/dbconfig');

module.exports = {
  getIngredients,
  addIngredients,
  editIngredient,
  deleteIngredient,
}

const getIngredients = () => {
  return db('ingredients');
}

const addIngredients = (ingredient) => {
  return db('ingredients').insert(ingredient);
}

const editIngredient = (changes, id) => {
  return db('ingredients').where({ id }).update(changes);
}

const deleteIngredient = (id) => {
  return db('ingredients').where({ id }).del();
}