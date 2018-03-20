
// Require Sequelize npm library
var Sequelize = require("sequelize");
// Require sequelize object exported from config folder
var sequelize = require("../config/connection.js");

// Create Account Table to hold: Accont Type and Balance Amount
var acct_table = sequelize.define("acct_table", {
	acct_type: {
    type: Sequelize.STRING
  },
  	balance_amount: {
    type: Sequelize.DECIMAL
  },
}, {
  timestamps: false,
  freezeTableName: true
});

// add dummy data to the tables
acct_table.create({
    acct_type: 'Money Market Acct',
    balance_amount: 1000.00
  })
  .then(function(err, acct_table) {
    if (err) {
      console.log("There was an error: acct_table");
    } else {
      console.log("Added data to acct_table");
      console.log(acct_table);
    }
  })

// Syncs with DB
acct_table.sync();

// Makes the Account Model available for other files (will also create a table)
module.exports = acct_table;
