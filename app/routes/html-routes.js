var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads login.handlebars
  app.get("/", function(req, res) {
    var sheets = {
      stylesheet: `<link rel='stylesheet' type='text/css' href='/login.css'>`
    }
    res.render("login", sheets);
  });

  //route to mySummary.handlebars
  app.get("/summary", function(req, res) {
    var sheets = {
      stylesheet: `<link rel='stylesheet' type='text/css' href='/style.css'>`
    }
    res.render("mySummary", sheets);
  });

  //route to acctDetail.handlebars
  app.get("/account-detail", function(req, res) {
    var sheets = {
      stylesheet: `<link rel='stylesheet' type='text/css' href='/style.css'>`
    }
    res.render("acctDetail", sheets);
  });

  //loads CSS
  //===================================================================
  app.get("/style.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css/style.css"));
  });

  app.get("/login.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css/login.css"));
  });

  //loads JS
  //===================================================================
  app.get("/acctDetail.js", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/acctDetail.js"));
  });

  app.get("/acctList.js", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/acctList.js"));
  });

  app.get("/login.js", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/login.js"));
  });
};
