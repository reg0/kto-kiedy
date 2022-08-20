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

exports.up = async function(db) {
  await db.insert('activity_types', name, 'HOME_OFFICE')
  await db.insert('activity_types', name, 'OFFICE')
  return db.insert('activity_types', name, 'VACATION')
};

exports.down = function(db) {
  return db.runSql("delete from activity_types where name= 'HOME_OFFICE' or name= 'OFFICE' or name = 'VACATION'");
};

exports._meta = {
  "version": 1
};
