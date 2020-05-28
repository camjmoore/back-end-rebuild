
exports.up = function(knex) {
  return knex.schema.createTable("recipe_categorizations", (tbl) => {
    tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    tbl.integer("category_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("categories")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipe_categorizations")
};
