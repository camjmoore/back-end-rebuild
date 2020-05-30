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
}

/** GET ALL RECIPES */
const getRecipes = () => {
  return db('recipes');
}

/** GET A RECIPE*/
const getById = () => {
  return db('recipes').where({ id });
}

/** ADD A RECIPE */
const addRecipe = (recipe) => {
  return db('recipes').insert(recipe);
}

/** CHANGE A RECIPE */
const editRecipe = (changes, id) => {
  return db('recipes').where({ id }).update(changes);
}

/** DELETE A RECIPE */
const editRecipe = (id) => {
  return db('recipes').where({ id }).del();
}

/**GET THE INGREDIENTS FOR A RECIPE */
const getRecipeIngredients = (id) => {
  return db('recipe_ingredients as ring')
    .join('recipes as r', 'r.id', 'ring.recipe_id')
    .join('ingredients as ing', 'ing.id', 'ri.ingredients_id')
    .where({ recipe_id: id })
    .select('ing.*');
}

/**GET THE INSTRUCTIONS FOR A RECIPE */
const getRecipeInstructions = (id) => {
  return db('recipe_instructions as rinst')
    .join('recipes as r', 'r.id', 'rinst.recipe_id')
    .join('instructions as inst', 'inst.id', 'rinst.instructions_id')
    .where({ recipe_id: id })
    .select('inst.*');
}

/**GET A RECIPES CATEGORIZATION */
const getRecipeCategorizations = (id) => {
  return db('recipe_categorizations as rcats')
    .join('recipes as r', 'r.id', 'rcat.recipe_id' )
    .join('categorizations as cats', 'cats.id', 'rcats.category_id')
    .where({ recipe_id: id })
    .select('cats.*');
}