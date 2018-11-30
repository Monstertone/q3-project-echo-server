
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: "Joe Davis", email: 'jdavis@gmail.com', password: '1234'},
        {name: "Lisa Smith", email: 'lsmith@gmail.com', password: '1234'},
        {name: "Cornelius Washington", email: 'cwash@gmail.com', password: '1234'},

      ]);
    });
};
