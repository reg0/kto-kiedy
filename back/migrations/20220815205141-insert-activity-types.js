'use strict';
const {v4: uuidv4} = require('uuid');

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

exports.up = async function(db) {
  await db.insert('activity_types', ['id', 'name'], [uuidv4(), 'HOME_OFFICE'])
  await db.insert('activity_types', ['id', 'name'], [uuidv4(), 'OFFICE'])
  return db.insert('activity_types', ['id', 'name'], [uuidv4(), 'VACATION'])
};

exports.down = function(db) {
  return db.runSql("delete from activity_types where name= 'HOME_OFFICE' or name= 'OFFICE' or name = 'VACATION'");
};

exports._meta = {
  "version": 1
};
