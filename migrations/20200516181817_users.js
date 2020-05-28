
exports.up = function(knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();

    tbl.string("user_name", 64).notNullable();
    tbl.string("password").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
