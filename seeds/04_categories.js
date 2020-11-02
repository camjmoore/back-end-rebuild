
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('categories').insert([
    {id: 1, category_name: 'keto'}
  ]);
};
