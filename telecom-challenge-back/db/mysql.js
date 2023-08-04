const mysql = require('mysql2');
require('dotenv').config();

const mysqldb = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.SQLDATABASE
});



module.exports = mysqldb