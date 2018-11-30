
exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', (table) => {
    table.increments();
    table.string('title');
    table.string('artist');
    table.string('album');
    table.string('file_url');
    table.string('cover_url');
    table.boolean('inList');
    table.timestamps(true, true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('songs');
};
