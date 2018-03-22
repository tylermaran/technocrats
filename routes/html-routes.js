var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads login.handlebars
  app.get("/", function(req, res) {
    var items = {
      stylesheet: `<link rel='stylesheet' type='text/css' href='/login.css'>`,
      title: `TSI`
    }
    res.render("login", items);
  });

  //route to mySummary.handlebars
  app.get("/summary", function(req, res) {
    var items = {
      stylesheet: `<link rel='stylesheet' type='text/css' href='/style.css'>`,
      title: `Summary`,
      sumActive: true
    }
    res.render("mySummary", items);
  });

  //route to acctDetail.handlebars
  app.get("/account-detail", function(req, res) {
    var items = {
      stylesheet: `<link rel='stylesheet' type='text/css' href='/style.css'>`,
      title: `Transactions`,
      accActive: true
    }
    res.render("acctDetail", items);
  });

  //route to about.handlebars
  app.get("/about", function(req, res) {
    var items = {
      stylesheet: `<link rel='stylesheet' type='text/css' href='/about.css'>`,
      title: `About`,
      abtActive: true
    }
    res.render("about", items);
  });

};
