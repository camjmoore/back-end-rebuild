
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('recipes').insert([
    {id: 1, title: 'Salted Caramel Pork Rind Cereal', users_id: 5, source: 'ruled.me', image: null},
    {id: 2, title: 'Keto Quiche', users_id: 5, source: 'keto connect', image: null},
    {id: 3, title: 'Haloumi Salad With Mint Dressing', users_id: 5, source: 'ruled.me', image: null},
    {id: 4, title: 'Keto Peanut butter Cups', users_id: 5, source: 'ruled.me', image: null},
    {id: 5, title: 'Jalapeno Popper Pizza', users_id: 5, source: 'ruled.me', image: null},
    {id: 6, title: 'Creamy Keto Taco Soup', users_id: 5, source: 'ruled.me', image: null},
    {id: 7, title: 'Guacamole', users_id: 5, source: 'me', image: null},
    {id: 8, title: 'Peanut Butter Fluff', users_id: 5, source: 'keto connect', image: null},
  ]);
};
