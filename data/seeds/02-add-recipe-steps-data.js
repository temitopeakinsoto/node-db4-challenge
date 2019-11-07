
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        { step_number: 1, instructions:'Wash the rice', recipe_id:1},
        { step_number: 2, instructions:'Boil the rice', recipe_id:1},
        { step_number: 3, instructions:'Add Maggi and salt', recipe_id:1},
        { step_number: 4, instructions:'Serve while hot', recipe_id:1}
      ]);
    });
};
