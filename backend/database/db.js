const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'fiori',
  password: 'root',
});

module.exports = pool.promise();
