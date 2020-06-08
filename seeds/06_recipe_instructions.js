
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        {recipe_id: 1, instructions_id: 1 },
        {recipe_id: 1, instructions_id: 2 },
        {recipe_id: 1, instructions_id: 3 },
        {recipe_id: 1, instructions_id: 4 },
        {recipe_id: 1, instructions_id: 5 },
        {recipe_id: 1, instructions_id: 6 },
        {recipe_id: 1, instructions_id: 7 },
        {recipe_id: 1, instructions_id: 8 }
      ]);
    });
};
