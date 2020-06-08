
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, category_name: 'breakfast'},
        {id: 2, category_name: 'keto'}
      ]);
    });
};
