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
  return db.runSql("insert into holidays(id, name, date) values (?, 'Wszystkich swietych', '2022-11-01'), (?, 'Swieto niepodleglosci', '2022-11-11'), (?, 'Boze narodzenie', '2022-12-25')", [uuidv4(), uuidv4(), uuidv4()])
};

exports.down = function(db) {
  return db.runSql("delete from holidays where date= '2022-11-01' or date= '2022-11-11' or date= '2022-12-25'");
};

exports._meta = {
  "version": 1
};
