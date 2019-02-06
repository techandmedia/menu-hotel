const mysql = require('mysql')

const connectionMySQL = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '123',
  database: 'db_kuesioner'
});

// const connectionMySQL = mysql.createConnection({
//   host: 'localhost',
//   port: '3306',
//   user: 'andri',
//   password: '123',
//   database: 'dv259321_inventory'
// });

module.exports = connectionMySQL;