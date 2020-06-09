const db = require('../../database/dbconfig');

module.exports = {
  getRecipes,
  getById,
  addRecipe,
  editRecipe,
  deleteRecipe,
  getRecipeInstructions,
  getRecipeIngredients,
  getRecipeCategorizations,
  //getRecipeByUserId ?
}

/** GET ALL RECIPES */
function getRecipes() {
  return db('recipes');
}

/** GET A RECIPE*/
function getById() {
  return db('recipes').where({ id });
}

/** ADD A RECIPE */
function addRecipe(recipe) {
  return db('recipes').insert(recipe);
}

/** CHANGE A RECIPE */
function editRecipe(changes, id) {
  return db('recipes').where({ id }).update(changes);
}

/** DELETE A RECIPE */
function deleteRecipe(id) {
  return db('recipes').where({ id }).del();
}

/**GET THE INGREDIENTS FOR A RECIPE */
function getRecipeIngredients(id) {
  return db('recipe_ingredients as ring')
    .join('recipes as r', 'r.id', 'ring.recipe_id')
    .join('ingredients as ing', 'ing.id', 'ring.ingredients_id')
    .where({ recipe_id: id })
    .select('ing.*');
}

/**GET THE INSTRUCTIONS FOR A RECIPE */
function getRecipeInstructions(id) {
  return db('recipe_instructions as rinst')
    .join('recipes as r', 'r.id', 'rinst.recipe_id')
    .join('instructions as inst', 'inst.id', 'rinst.instructions_id')
    .where({ recipe_id: id })
    .select('inst.*');
}

/**GET A RECIPES CATEGORIZATION */
function getRecipeCategorizations(id) {
  return db('recipe_categorizations as rcats')
    .join('recipes as r', 'r.id', 'rcats.recipe_id' )
    .join('categorizations as cats', 'cats.id', 'rcats.category_id')
    .where({ recipe_id: id })
    .select('cats.*');
}

function getRecipeByUserId(id) {
  return db('users as u')
    .join('recipes as r', 'r.users_id', 'u.id')
    .where({ users_id: id })
    .select('r.*');
}