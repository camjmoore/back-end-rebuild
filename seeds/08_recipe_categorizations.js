
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_categorizations').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_categorizations').insert([
        {recipe_id: 1, category_id: 1},
        {recipe_id: 1, category_id: 2}
      ]);
    });
};
