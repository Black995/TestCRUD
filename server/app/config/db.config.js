const { Pool } = require('pg')

const db = {
  user: 'postgres',
  host: 'localhost',
  database: 'TestCRUD',
  password: 'black995',
  port: 5432
}
const database = new Pool(db);

module.exports = database;