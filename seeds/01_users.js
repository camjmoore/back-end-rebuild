
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('users').insert([
    {id: 1, user_name: 'Hannibal', password: '$2a$08$S9QmhmSX5rKmfv9r1FgRWOScjQN1y2LKvEYjcXwYr8ibc4EbEExCi'},
    {id: 2, user_name: 'Lilly', password: '$2a$08$vcl.rzvSLXoX1KltpBO8Pec5ItLue1d5NkzamNsU6vxB7hsBNRg0e'},
    {id: 3, user_name: 'Lucy', password: '$2a$08$tQCrsa6qyY3aMfjD8.cvnebUomZTjcFbh3t9B7JN8YNbT7J5q5CFa'},
    {id: 4, user_name: 'Roxy', password: '$2a$08$xjH9pa9O8UVWh/aYlkNZzOjtzU/N.o0EhQqIjy6vsw8OdIPHy4ONG'},
    {id: 5, user_name: 'Charity', password: '$2a$08$MDO5pxPik/mPuit6BFA5tu3RMgB81BxBFYBxToI0V7Op61pyaIjp2'}
  ]);
};
