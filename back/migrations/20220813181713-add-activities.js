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
  return db.createTable('activities', {
    id: { type: 'string', primaryKey: true},
    date: 'date',
    employee_id: 'string', 
    team_id: 'string', 
    activity_type_id: 'string',
    public_comment: 'string',
    hidden_comment: 'string',
  })
};

exports.down = function(db) {
  return db.dropTable('activities');
};

exports._meta = {
  "version": 1
};
