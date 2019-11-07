exports.up = function(knex) {
    return (
      knex.schema
        //Recipes table
        .createTable("recipes", tbl => {
          tbl.increments();
          tbl
            .string("recipe_name", 255)
            .notNullable()
            .unique();
        })
        //ingredients table
        .createTable("ingredients", tbl => {
          tbl.increments();
          tbl
            .string("ingredient_name", 255)
            .notNullable()
            .unique();
        })
        //Recipe_Ingredients table
        .createTable("recipe_ingredients", tbl => {
          tbl.increments();
          tbl
            .float("ingredient_quantity")
            .unsigned()
            .notNullable();
          // foreign key for recipe id
          tbl
            .integer("recipe_id")
            .unsigned()
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE") 
            .onUpdate("CASCADE");
          // Foreign Key for Ingredient id
          tbl
            .integer("ingredient_id")
            .unsigned()
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        })
          //Recipe_Steps table
        .createTable("recipe_steps", tbl => {
          tbl.increments();
          tbl.integer("step_number", 128).notNullable();
          tbl.string("instructions", 500).notNullable();
          tbl
            .integer("recipe_id")
            .unsigned()
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        })
    );
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("recipe_steps")
      .dropTableIfExists("recipe_ingredients")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("recipes");
  };
