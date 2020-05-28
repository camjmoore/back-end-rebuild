
exports.up = function(knex) {
  return knex.schema.createTable("instructions", (tbl) => {
    tbl.increments();
    tbl.integer("step").notNullable();
    tbl.string("time", 64).notNullable();
    tbl.text("directions").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("instructions");
};
