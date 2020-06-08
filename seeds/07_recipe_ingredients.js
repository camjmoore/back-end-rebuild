
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredients_id: 1 },
        {recipe_id: 1, ingredients_id: 2 },
        {recipe_id: 1, ingredients_id: 3 }
      ]);
    });
};
