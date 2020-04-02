exports.up = function (knex) {
  return knex.schema.createTable('jobs', function (table) {
    table.string('id').primary();
    table.string('role').notNullable();
    table.string('description');
    table.string('project');
    table.string('projectmanager');
    table.string('status').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('jobs');
};
