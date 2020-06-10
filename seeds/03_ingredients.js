
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('ingredients').insert([
    {id: 1, ingredient: 'Queso Fresco', quantity: '4 oz'},
    {id: 2, ingredient: 'Pork Rinds', quantity: '2 oz'},
    {id: 3, ingredient: 'Liquid Stevia', quantity: '30 drops'},
    {id: 4, ingredient: 'Butter', quantity: '1 Tbsp'},
    {id: 5, ingredient: 'Ground Cinnamon', quantity: '1 1/2 Tbsp'},
    {id: 6, ingredient: 'Erythritol', quantity: '1 Tbsp'}
  ]);
};
