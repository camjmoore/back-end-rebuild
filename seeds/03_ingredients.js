
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('ingredients').insert([
    {id: 1, ingredient: 'Heavy Cream', quantity: '2 Tbsp'},
    {id: 2, ingredient: 'Pork Rinds', quantity: '1 oz'},
    {id: 3, ingredient: 'Coconut Milk', quantity: '1 cup'},
    {id: 4, ingredient: 'Butter', quantity: '2 Tbsp'},
    {id: 5, ingredient: 'Ground Cinnamon', quantity: '1/4 Tbsp'},
    {id: 6, ingredient: 'Erythritol', quantity: '1 Tbsp'},
    {id: 7, ingredient: 'Heavy Cream', quantity: '1 cup'},
    {id: 8, ingredient: 'eggs', quantity: '4'},
    {id: 9, ingredient: 'pink salt', quantity: '1/2 tsp'},
    {id: 10, ingredient: 'black pepper', quantity: '1/4 tsp'},
    {id: 11, ingredient: 'toppings', quantity: '8 ounces'},
    {id: 12, ingredient: 'cheese', quantity: '1 cup'},
  ]);
};
