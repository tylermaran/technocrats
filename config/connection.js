// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
require('dotenv').config()

// Dependencies
var Sequelize = require("sequelize");

//Hooks up project to Jaws DB
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Creates mySQL connection using Sequelize
  var sequelize = new Sequelize("sequelizetechinvestments_db", "root", process.env.PW, {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}



// Exports the connection for other files to use
module.exports = sequelize;
