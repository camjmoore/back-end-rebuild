
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user_name: 'Hannibal', password: 'boyboy'},
        {id: 2, user_name: 'Lilly', password: 'liplip'},
        {id: 3, user_name: 'Lucy', password: 'chocolate'},
        {id: 4, user_name: 'Roxy', password: 'fruitbat'},
        {id: 5, user_name: 'Charity', password: 'lucydog'}
      ]);
    });
};
