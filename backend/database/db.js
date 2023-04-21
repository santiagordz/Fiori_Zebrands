const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  database: process.env.DB_NAME || 'fiori123',
  password: process.env.DB_PASSWORD || '',
});

module.exports = pool.promise();

pool.query('SELECT 1', (error, results) => {
  if (error) {
    console.error('Error connecting to the database:', error);
  } else {
    console.log('Connected to the database successfully');
  }
});
