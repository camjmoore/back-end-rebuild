
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipe_instructions').truncate()
  await knex('recipe_categorizations').truncate()
  await knex('recipe_ingredients').truncate()
  await knex('recipes').truncate()
  await knex('categories').truncate()
  await knex('ingredients').truncate()
  await knex('instructions').truncate()
  await knex('users').truncate()
};
