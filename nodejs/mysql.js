const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'lfc3.14159',
  database : 'lifachang',
  port     : '3306'
});
connection.connect();
connection.query('select * from users', function (error, results, fields) {
  if (error) throw error;
  console.log(results)
});
connection.end();
