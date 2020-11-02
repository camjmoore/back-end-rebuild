
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('recipes').insert([
    {id: 1, title: 'Salted Caramel Pork Rind Cereal', users_id: 5, source: 'ruledme' },
    {id: 2, title: 'Keto Pie Crust', users_id: 5, source: 'keto connect' },
    {id: 3, title: 'Keto Quiche', users_id: 5, source: 'keto connect' }
  ]);
};
