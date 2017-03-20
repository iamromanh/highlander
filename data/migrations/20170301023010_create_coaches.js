exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('coaches', function(table) {
      table.increments('id').primary();
      // table.integer('team_id').unsigned();
      // table.foreign('team_id').references('team_id').inTable('coaches_teams');
      table.string('email');
      table.string('first_name');
      table.string('last_name');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('coaches')
  ]);
};
