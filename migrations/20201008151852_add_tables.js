exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments();
      tbl.integer("recipe_id").unsigned().references("recipes.id");
      tbl.text("step_info").notNullable();
      tbl.integer("step_num").unsigned();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.text("name");
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl.increments();
      tbl.integer("recipe_id").references("recipes.id");
      tbl.integer("ingredient_id").references("ingredients.id");
      tbl.float("ingredient_qty");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredients");
};

// table.integer('steps_id').unsigned().references("steps.id")
