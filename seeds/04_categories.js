
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('categories').insert([
    {id: 1, category_name: 'breakfast'},
    {id: 2, category_name: 'keto'}
  ]);
};
