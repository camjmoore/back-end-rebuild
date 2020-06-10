
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('recipes').insert([
    {id: 1, title: 'Low Carb Cereal', users_id: 5, source: 'keto connect' },
    {id: 2, title: 'Keto Pie Crust', users_id: 5, source: 'keto connect' },
    {id: 3, title: 'Keto Quiche', users_id: 5, source: 'keto connect' },
  ]);
};
