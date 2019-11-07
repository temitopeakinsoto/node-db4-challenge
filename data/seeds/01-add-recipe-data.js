
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, recipe_name: 'banku'},
        {id: 2, recipe_name: 'akara'},
        {id: 3, recipe_name: 'efo riro'}
      ]);
    });
};
