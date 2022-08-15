'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('activity_types', {
    id: { type: 'string', primaryKey: true},
    name: 'string',
  })
};

exports.down = function(db) {
  return db.dropTable('activity_types')
};

exports._meta = {
  "version": 1
};
