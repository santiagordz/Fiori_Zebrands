const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'bauer',
  database: 'fiori',
  password: '',
  port: 8889,
});

module.exports = pool.promise();
