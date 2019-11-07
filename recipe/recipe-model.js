const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes as r").select("r.id", "r.recipe_name");
}

// function getShoppingList(schemeId) {
//   return db("schemes as s").first()
//     .select("s.id", "s.scheme_name")
//     .where({ "s.id": schemeId });
// }

// function getInstructions(schemeId) {
//   return db("steps as s")
//     .join("schemes", "schemes.id", "s.scheme_id")
//     .select("s.id", "s.instructions", "scheme_name")
//     .where({ "s.scheme_id": schemeId });
// }




