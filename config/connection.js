var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({host: "localhost", port: 8889, user: "root", password: "root", database: "burgers_db"});
}

connection
  .connect(function (err) {
    if (err) 
      throw err;
    console.log("connected as id " + connection.threadId);
    //CALLFIRSTFUNCTION
  });

// Export connection for our ORM to use.
module.exports = connection;
