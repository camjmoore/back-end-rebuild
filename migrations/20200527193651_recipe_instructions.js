
exports.up = function(knex) {
  return knex.schema.createTable("recipe_instructions", (tbl) => {
    tbl.integer("recipe_id")
        .unsigned()
        .notNullable() 
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    tbl.integer("instructions_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("instructions")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipe_instructions")
};
