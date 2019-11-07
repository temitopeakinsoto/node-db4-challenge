const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getInstructions,
  getShoppingList

};

function getRecipes(recipeId) {
  return db("recipes as r").select("r.id", "r.recipe_name");
}

function getInstructions(recipeId) {
  return db("recipe_steps as rs")
    .select("rs.step_number", "rs.instructions")
    .where({ "rs.recipe_id": recipeId });
}

function getShoppingList(recipeId) {
    return db("recipe_ingredients as ri")
      .join("recipes as r", "ri.recipe_id", "=", "r.id")
      .join("ingredients as i", "ri.ingredient_id", "=", "i.id")
      .select("r.recipe_name", "i.ingredient_name", "ri.ingredient_quantity")
      .where("r.id", recipeId);
   }




