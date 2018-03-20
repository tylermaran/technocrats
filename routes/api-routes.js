// Requiring our models for syncing
var customer_table = require("../models/customer_table.js");


// Routes
// =============================================================
module.exports = function(app) {

  //Routes for login page. GET existing account & POST new account

  app.get("/api/all", function(req, res) {
    // Finding all accounts, and returning them as a JSON object
    console.log("Handles routing to all");
    customer_table.findAll({}).then(function(result) {
      res.json(result);
    })
  });

  app.get("/api", function(req, res) {
    // Finding all accounts, and returning them as a JSON object
    console.log("Handles routing to all");
    customer_table.findAll({}).then(function(result) {
      res.json(result);
    })
  });
  
  app.get("/api/summary", function(req, res) {
    // Finding all accounts, and returning them as a JSON object
    console.log("Handles routing to all");
    customer_table.findAll({}).then(function(result) {
      res.json(result);
    })
  });

  app.get("/api/account-detail", function(req, res) {
    // Finding all accounts, and returning them as a JSON object
    console.log("Handles routing to all");
    customer_table.findAll({}).then(function(result) {
      res.json(result);
    })
  });

  // app.post("api/new", function(req, res) {
  //   Account.create({
  //     email_id: req.body.email_id,
  //     pass_word: req.body.pass_word,
  //     last_name: req.body.last_name,
  //     first_name: req.body.first_name
  //   })
  // });

}
