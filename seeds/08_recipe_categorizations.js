
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('recipe_categorizations').insert([
    {recipe_id: 1, category_id: 1},
    {recipe_id: 2, category_id: 1},
    {recipe_id: 3, category_id: 1},
    {recipe_id: 4, category_id: 1},
    {recipe_id: 5, category_id: 1},

  ]);
};
