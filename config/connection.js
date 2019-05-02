// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  port: 3306,
  user: "bc58f1095586fc",
  password: "3423ddbe",
  database: "heroku_569f1531e50280d"
});

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "trilogy-2",
//   password: "david123",
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
