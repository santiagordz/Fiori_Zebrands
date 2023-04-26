const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'fiori_final',
  password: '',
  // port: 8889,
});

module.exports = pool.promise();
