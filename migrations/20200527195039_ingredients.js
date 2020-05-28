
exports.up = function(knex) {
  return knex.schema.createTable("ingredients", (tbl) => {
    tbl.increments();
    tbl.string("ingredient", 64).notNullable();
    tbl.string("quantity", 64).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients");
};
