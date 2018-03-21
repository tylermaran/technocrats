var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhos",
    user: "root",
    passport: process.env.PW,,
    database: "sequelizetechinvestments_db",
    port: 3306,
    dialect: "mysql"
  });
};

connection.connect();
module.exports = connection;
