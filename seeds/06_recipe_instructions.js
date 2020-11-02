
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('recipe_instructions').insert([
    {recipe_id: 1, instructions_id: 1 },
    {recipe_id: 1, instructions_id: 2 },
    {recipe_id: 1, instructions_id: 3 },
    {recipe_id: 1, instructions_id: 4 },
    {recipe_id: 1, instructions_id: 5 },
    {recipe_id: 1, instructions_id: 6 },
    {recipe_id: 1, instructions_id: 7 }
  ]);
};
