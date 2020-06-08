
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('recipe_ingredients').insert([
    {recipe_id: 1, ingredients_id: 1 },
    {recipe_id: 1, ingredients_id: 2 },
    {recipe_id: 1, ingredients_id: 3 },
    {recipe_id: 1, ingredients_id: 4 },
    {recipe_id: 1, ingredients_id: 5 },
    {recipe_id: 1, ingredients_id: 6 }
  ]);
};
