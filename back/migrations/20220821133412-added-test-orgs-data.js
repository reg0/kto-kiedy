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
  await db.insert('organizations', ['id', 'name'], ['b1cceb82-2a95-40b7-a5be-0f09ff2f48d5', 'TestOrg'])
  await db.insert('organizations', ['id', 'name'], ['f8ad056f-fd4c-4f44-9fe3-440831c04fd1', 'AdminOrg'])
  await db.insert('teams', ['id', 'name', 'color_hex', 'organization_id'], ['ce87e5cc-6b67-4ee1-a613-ea297d83de1c', 'TestTeam', '#ff0000', 'b1cceb82-2a95-40b7-a5be-0f09ff2f48d5'])
  await db.insert('teams', ['id', 'name', 'color_hex', 'organization_id'], ['82f736a7-9026-451b-8841-358c6803976a', 'AdminTeam', '#00ff00', 'f8ad056f-fd4c-4f44-9fe3-440831c04fd1'])
  await db.insert('employees', ['id', 'name', 'surname', 'organization_id'], ['3f4d7d85-31c5-4671-8e74-37388526a977', 'John', 'Doe', 'b1cceb82-2a95-40b7-a5be-0f09ff2f48d5'])
  await db.insert('employees', ['id', 'name', 'surname', 'organization_id'], ['79abb183-bed9-4a8a-b0a4-b16f03e4b6e7', 'Admin', 'Adminovich', 'f8ad056f-fd4c-4f44-9fe3-440831c04fd1'])
  await db.insert('employees_teams', ['team_id', 'employee_id', 'role'], ['ce87e5cc-6b67-4ee1-a613-ea297d83de1c', '3f4d7d85-31c5-4671-8e74-37388526a977', 'EMPLOYEE'])
  return db.insert('employees_teams', ['team_id', 'employee_id', 'role'], ['82f736a7-9026-451b-8841-358c6803976a', '79abb183-bed9-4a8a-b0a4-b16f03e4b6e7', 'ADMIN'])
};

exports.down = async function(db) {
  await db.runSql('delete from employees_teams where employee_id = ? or employee_id = ?', ['3f4d7d85-31c5-4671-8e74-37388526a977', '79abb183-bed9-4a8a-b0a4-b16f03e4b6e7']);
  await db.runSql('delete from employees where id = ? or id = ?', ['3f4d7d85-31c5-4671-8e74-37388526a977', '79abb183-bed9-4a8a-b0a4-b16f03e4b6e7']);
  await db.runSql('delete from teams where id = ? or id = ?', ['ce87e5cc-6b67-4ee1-a613-ea297d83de1c', '82f736a7-9026-451b-8841-358c6803976a']);
  return db.runSql('delete from organizations where id = ? or id = ?', ['b1cceb82-2a95-40b7-a5be-0f09ff2f48d5', 'f8ad056f-fd4c-4f44-9fe3-440831c04fd1']);
};

exports._meta = {
  "version": 1
};
