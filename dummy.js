// Add dummy data to the tables
var db = require("./models");

db.Transaction.create({
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
      console.log("Added data to Transactions");
      console.log(Transaction);
    }
  })

db.Transaction.create({
    tran_datetime:'2018-02-11 03:13:07.000000',
    tran_symbol: 'SPY',
    tran_desc: 'S&P 500',
  symbol_quote: 275,
    symbol_delta: 2,
    symbol_quatity: 5,
    symbol_cost_share: 280,
    symbol_cost_basis: 220,
    symbol_gain_loss: 60,
    symbol_market_value: 295
  })
  .then(function(err, acct_table) {
    if (err) {
      // console.log("There was an error: tran_table");
    } else {
      console.log("Added data to Transactions");
      console.log(Transaction);
    }
  })

db.Account.create({
    acct_type: 'Money Market Acct',
    balance_amount: 1000.00
  })
  .then(function(err, acct_table) {
    if (err) {
      console.log("There was an error: Account");
    } else {
      console.log("Added data to Account");
      console.log(Account);
    }
  })

db.Account.create({
    acct_type: 'Demand Deposit Acct',
    balance_amount: 1337.00
  })
  .then(function(err, acct_table) {
    if (err) {
      console.log("There was an error: Account");
    } else {
      console.log("Added data to Account");
      console.log(Account);
    }
  })

db.Customer.create({
    email_id: 'test@gmail.com',
    pass_word: 'test123',
    last_name: 'Smith',
    first_name: 'John'
  })
  .then(function(err, Customer) {
    if (err) {
      // console.log("There was an error: customer_table");
    } else {
      console.log("Added data to Customer");
      console.log(Customer);
    }
  })


db.Customer.create({
    email_id: 'tyler.maran@gmail.com',
    pass_word: 'password',
    last_name: 'Maran',
    first_name: 'Tyler'
  })
  .then(function(err, Customer) {
    if (err) {
      // console.log("There was an error: customer_table");
    } else {
      console.log("Added data to Customer");
      console.log(Customer);
    }
  })
