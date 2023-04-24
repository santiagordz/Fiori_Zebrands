const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'fiori_final',
  password: '',
});

module.exports = pool.promise();

pool.query('SELECT 1', (error, results) => {
  if (error) {
    console.error('Error connecting to the database:', error);
  } else {
    console.log('Connected to the database successfully');
  }
});
