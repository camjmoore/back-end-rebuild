
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step: 1, time: '5 min', directions: 'Pulse cheese and pork rinds in a processor'},
        {id: 2, step: 2, time: '10 min', directions: 'Add melted butter, cinnamon and stevia drops and pulse to combine'},
        {id: 4, step: 4, time: '30 min', directions: 'Lay out the cereal mixture onto a greased baking sheet and spread as thin or thick as preferred. Make sure it is even to ensure even heating'},
        {id: 5, step: 5, time: '30 min', directions: 'Lay another baking sheet on top and place it in to a 450 degree oven for 8 minutes'},
        {id: 6, step: 6, time: '30 min', directions: 'Remove top baking sheet and bake for additional 2 minutes'},
        {id: 7, step: 7, time: '30 min', directions: 'Remove any fully cooked pieces (usually around the edge) and place back into the oven for additional 8-10 minutes'},
        {id: 8, step: 8, time: '30 min', directions: 'Allow to cool and enjoy! Store in fridge'}
      ]);
    });
};
