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
  return db.createTable('employees_teams', {
    team_id: { type: 'string', primaryKey: true},
    employee_id: { type: 'string', primaryKey: true},
    role: 'string',
  });
};

exports.down = function(db) {
  return db.dropTable('employees_teams');
};

exports._meta = {
  "version": 1
};
