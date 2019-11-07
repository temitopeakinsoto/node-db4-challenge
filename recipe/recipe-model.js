const db = require("../data/db-config");

module.exports = {
  getRecipes
};

function getRecipes() {
  return db("recipes as r").select("r.id", "r.recipe_name");
}
