const mysql = require('mysql2');

const pool = mysql.createPool({
<<<<<<< HEAD
  host: 'localhost',
  user: 'root',
  database: 'fiori_final',
  password: '',
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // database: process.env.DB_NAME,
  // password: process.env.DB_PASSWORD,
=======
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
>>>>>>> aws/deploy
});

module.exports = pool.promise();

pool.query('SELECT 1', (error, results) => {
  if (error) {
    console.error('Error connecting to the database:', error);
  } else {
    console.log('Connected to the database successfully');
  }
});
