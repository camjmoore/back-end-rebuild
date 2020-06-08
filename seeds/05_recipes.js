
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, title: 'Low Carb Cereal', users_id: 5, source: 'keto connect' },
        {id: 2, title: 'Keto Pie Crust', users_id: 5, source: 'keto connect' },
        {id: 3, title: 'Keto Quiche', users_id: 5, source: 'keto connect' },
      ]);
    });
};
