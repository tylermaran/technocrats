// Requiring our models for syncing
var db = require( "../models" );

// Routes
// =============================================================
module.exports = function(app) {


// **************************************************************
  app.get("/api/Customer", function(req, res) {
    // Finding all Customers, and returning them as a JSON object
    console.log("Handles routing to Customer");
    db.Customer.findAll({}).then(function(result) {
      res.json(result);
      console.log(req.params);
    })
  });

  app.get("/api/Account", function(req, res) {
    // Finding all accounts, and returning them as a JSON object
    console.log("Handles routing to Account");
    db.Account.findAll({}).then(function(result) {
      res.json(result);
    })
  });
  
  app.get("/api/Transaction", function(req, res) {
    // Finding all Transactions, and returning them as a JSON object
    console.log("Handles routing to Transaction");
    db.Transaction.findAll({}).then(function(result) {
      res.json(result);
    })
  });

// **************************************************************

  // Search for a user by the email address
  app.get("/api/:searchedUser", function(req, res) {
    console.log("Searching for user")
    db.Customer.findOne({
      where: {
        email_id: req.params.searchedUser
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/transaction/:searchedEmail", function(req, res) {
    console.log("Searching for user")
    db.Transaction.findOne({
      where: {
        email_id: req.params.searchedEmail
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.post("/api/new", function(req, res) {
    console.log(req.body.email_id);
    db.Customer.create({
      email_id: req.body.email_id,
      pass_word: req.body.pass_word,
      last_name: req.body.last_name,
      first_name: req.body.first_name
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });




}
