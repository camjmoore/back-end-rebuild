
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'almond flour', quantity: '1/2 cup'},
        {id: 2, ingredient: 'coconut flour', quantity: '1 cup'},
        {id: 3, ingredient: 'flax seed', quantity: '1/4 cup'}
      ]);
    });
};
