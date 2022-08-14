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
  return db.createTable('Employees', {
    id: { type: 'string', primeryKey: true},
    name: 'string',
    surname: 'string',
    email: 'string',
    organization_id: 'string',
  });
};

exports.down = function(db) {
  return db.dropTable('Employees');
};

exports._meta = {
  "version": 1
};
