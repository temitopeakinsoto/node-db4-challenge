
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, ingredient_quantity: 200 }, 
        { recipe_id: 2, ingredient_id: 2, ingredient_quantity: 400 },
        { recipe_id: 3, ingredient_id: 3, ingredient_quantity: 120 },
        { recipe_id: 2, ingredient_id: 4, ingredient_quantity: 100 }, 
        { recipe_id: 3, ingredient_id: 5, ingredient_quantity: 30 } 
      ]);
    });
}
