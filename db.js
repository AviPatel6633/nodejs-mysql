var mysql = require('mysql');
require('dotenv').config()

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: process.env.TABLE_NAME
});

db.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log("Connected to the database!");
  });

module.exports = db;