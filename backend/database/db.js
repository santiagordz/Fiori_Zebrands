const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'fiori_zeb',
  password: '',
});

module.exports = pool.promise();
1;
