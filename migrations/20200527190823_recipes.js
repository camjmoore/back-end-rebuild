exports.up = function (knex) {
  return knex.schema.createTable("recipes", (tbl) => {
    tbl.increments();
    tbl.string("title", 64).notNullable();
    tbl.integer("users_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    tbl.string("source", 32).nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("recipes");
};
