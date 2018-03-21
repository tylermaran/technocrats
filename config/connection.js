var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    passport: "root",
    database: "sequelizetechinvestments_db",
    port: 8889,
    dialect: "mysql"
  });
};

connection.connect();
module.exports = connection;
