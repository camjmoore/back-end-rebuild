
exports.seed = async function(knex) {
// Inserts seed entries
  await knex('users').insert([
    {id: 1, user_name: 'Hannibal', password: '$2a$08$S9QmhmSX5rKmfv9r1FgRWOScjQN1y2LKvEYjcXwYr8ibc4EbEExCi'},
    {id: 2, user_name: 'Lilly', password: '$2a$08$vcl.rzvSLXoX1KltpBO8Pec5ItLue1d5NkzamNsU6vxB7hsBNRg0e'},
    {id: 3, user_name: 'Lucy', password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikx1Y3kiLCJpYXQiOjE2MDQ2OTAyNjcsImV4cCI6MTYwNDc3NjY2N30.cc534n174fmEyNVNR4zyf2Y5YukucE9EYYD1ofI5-lk'},
    {id: 4, user_name: 'Roxy', password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJveHkiLCJpYXQiOjE2MDQ2OTAzMDcsImV4cCI6MTYwNDc3NjcwN30.rDp4vk3-9VK3N3zp74_YRm3evC7fHpI4RyqW_wR2zjM'},
    {id: 5, user_name: 'Charity', password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkNoYXJpdHkiLCJpYXQiOjE2MDQ2OTAzNDIsImV4cCI6MTYwNDc3Njc0Mn0.OmtB56cn8ONHhKkEFLAO1LeA-lA6EKJy4_UT0vVhOWE'}
  ]);
};
