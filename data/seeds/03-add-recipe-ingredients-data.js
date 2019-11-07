
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'water'},
        { ingredient_name: 'Rice'},
        { ingredient_name: 'Groundnut Oil'},
        { ingredient_name: 'Maggi'},
        { ingredient_name: 'beans'},
        { ingredient_name: 'fish'},
        { ingredient_name: 'vegetables'}
      ]);
    });
};
