// Dependencies
// =============================================================

// Require Sequelize npm library
var Sequelize = require("sequelize");
// Require sequelize object exported from config folder
var sequelize = require("../config/connection.js");


// Create Customer Table to hold: Email, Password, Last Name, First name
var customer_table = sequelize.define("customer_table", {
	email_id: {
    type: Sequelize.STRING
  },
  	pass_word: {
    type: Sequelize.STRING
  },
  	last_name: {
    type: Sequelize.STRING
  },
  	first_name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false,
  freezeTableName: true
});

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

// Create Transaction Table to hold: Transaction Symbol, Transaction Description,
var tran_table = sequelize.define("tran_table", {
	tran_datetime: {
    type: Sequelize.DATE
  },
  	tran_symbol: {
    type: Sequelize.STRING
  },
  	tran_desc: {
    type: Sequelize.STRING
  },
  	symbol_quote: {
    type: Sequelize.DECIMAL
  },
  	symbol_delta: {
    type: Sequelize.DECIMAL
  },
  	symbol_quatity: {
    type: Sequelize.DECIMAL
  },
  	symbol_cost_share: {
    type: Sequelize.DECIMAL
  },
  	symbol_cost_basis: {
    type: Sequelize.DECIMAL
  },
  	symbol_gain_loss: {
    type: Sequelize.DECIMAL
  },
  	symbol_market_value: {
    type: Sequelize.DECIMAL
  },
}, {
  timestamps: false,
  freezeTableName: true
});


// Add dummy data to the tables
customer_table.create({
    email_id: 'test@gmail.com',
    pass_word: 'test123',
    last_name: 'Smith',
    first_name: 'John'
  })
  .then(function(err, customer_table) {
    if (err) {
      // console.log("There was an error: customer_table");
    } else {
      console.log("Added data to customer_table");
      console.log(customer_table);
    }
  })

acct_table.create({
    acct_type: 'Money Market Acct',
    balance_amount: 1000.00
  })
  .then(function(err, acct_table) {
    if (err) {
      // console.log("There was an error: acct_table");
    } else {
      console.log("Added data to acct_table");
      console.log(acct_table);
    }
  })

tran_table.create({
    tran_datetime:'2018-01-19 03:13:07.000000',
    tran_symbol: 'QQQ',
    tran_desc: 'POWERSHARES NASDAQ 100',
	symbol_quote: 100,
    symbol_delta: 0,
    symbol_quatity: 1,
    symbol_cost_share: 80, 
    symbol_cost_basis: 80,
    symbol_gain_loss: 20,
    symbol_market_value: 100
  })
  .then(function(err, acct_table) {
    if (err) {
      // console.log("There was an error: tran_table");
    } else {
      console.log("Added data to acct_table");
      console.log(acct_table);
    }
  })

// Syncs with DB
customer_table.sync();
acct_table.sync();
tran_table.sync();

customer_table.hasMany(acct_table, {foreignKey: 'id'})
acct_table.belongsTo(customer_table, {foreignKey: 'id'})


customer_table.findAll({
  include: [{
    model: acct_table,
    required: true
   }]
})


module.exports = customer_table;