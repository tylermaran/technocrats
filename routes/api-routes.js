// Requiring our models for syncing
var User = require("../models/user.js"); //FILE NAME MAY DIFFER

// Routes
// =============================================================
module.exports = function(app) {

  //Routes for login page. GET existing account & POST new account

  app.get("api/:users?", function(req, res) {
    User.findAll({}).then(function(result) {
      return res.json(result);
    });
  });

  app.post("api/new", function(req, res) {
    User.create({
      email_id: req.body.email_id,
      pass_word: req.body.pass_word,
      last_name: req.body.last_name,
      first_name: req.body.first_name
    })
  });

// =============================================================

  app.get(/*ROUTE GOES HERE*/, function(req, res) {
    /*SEQUELIZE CODE GOES HERE*/
  });

  app.post(/*ROUTE GOES HERE*/, function(req, res) {
    /*SEQUELIZE CODE GOES HERE*/
  });

  app.delete(/*ROUTE GOES HERE*/, function(req, res) {
    /*SEQUELIZE CODE GOES HERE*/
  });

  app.put(/*ROUTE GOES HERE*/, function(req, res) {
    /*SEQUELIZE CODE GOES HERE*/
  });
}
