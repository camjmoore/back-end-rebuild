
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('instructions').insert([
    {id: 1, step: 1, time: '5 min', directions: 'Break up pork rinds so theyre in smaller pieces that are able to get coated properly'},
    {id: 2, step: 2, time: '10 min', directions: 'Put your pan on medium heat and add 2 Tbsp. Butter. Let this cook down until it becomes browned'},
    {id: 3, step: 3, time: '5 min', directions: 'Remove from heat and add heavy cream and erythritol. Start mixing it and return to the heat'},
    {id: 4, step: 4, time: '5 min', directions: 'The caramel mixture will start bubbling. Continue mixing it until the color you want is attained'},
    {id: 5, step: 5, time: '2 min', directions: 'Once the caramel comes together, add your pork rinds and mix them in. Make sure all pork rinds get coated'},
    {id: 6, step: 6, time: '45 min', directions: 'Transfer pork rinds to a container or onto foil and put in the fridge for 20-45 minutes'},
    {id: 7, step: 7, time: '3 min', directions: 'Serve with milk and garnish with nuts if youd like'},
    {id: 8, step: 8, time: '60 minutes', directions:'Chill pie crust for 30-60 minutes in the fridge to firm up prior to rolling out'},
    {id: 9, step: 9, time: '30 minutes', directions:'Preheat oven to 375 degrees F'},
    {id: 10, step: 10, time: '10 minutes', directions:'Roll the chilled pie crust between two sheets of parchment paper and transfer to your pie/tart pan. Form the crust to the sides of the pan and remove any excess'},
    {id: 11, step: 11, time: '2 minutes', directions:'Line the inside of the pie crust with a square of parchment paper and fill to the edges with pie weights or use another oven safe pan/pot (as shown in video) to prevent crust from inflating'},
    {id: 12, step: 12, time: '15 minutes', directions:'Bake the crust for about 15 minutes, until pale golden. Remove from the oven and allow to cool. Reduce oven temp to 350 degrees F'},
    {id: 13, step: 13, time: '5 minutes', directions:'Combine the eggs, heavy cream, salt, and pepper in a large bowl. Using a hand mixer, blend until well combined'},
    {id: 14, step: 14, time: '5 minutes', directions:'Layer the bacon and cheese in the bottom of the pie crust, then pour the egg mixture on top'},
    {id: 15, step: 15, time: '45 minutes', directions:'Cover the edges with foil or a pie crust shield if they are very exposed, then bake for 40-45 minutes, or until a knife inserted 2 inches from the edge comes out clean'},
    {id: 16, step: 16, time: '10 minutes', directions:'The center will be set but still slightly jiggly. Allow to cool for 10 minutes before cutting and serving'},
  ]);
};
