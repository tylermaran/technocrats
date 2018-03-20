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
      title: `TSI`
    }
    res.render("mySummary", items);
  });

  //route to acctDetail.handlebars
  app.get("/account-detail", function(req, res) {
    var items = {
      stylesheet: `<link rel='stylesheet' type='text/css' href='/style.css'>`,
      title: `Transactions`
    }
    res.render("acctDetail", items);
  });

  //route to about.handlebars
  app.get("/about", function(req, res) {
    var items = {
      stylesheet: `<link rel='stylesheet' type='text/css' href='/style.css'>`,
      title: `About`
    }
    res.render("about", items);
  });


  //
  // //loads CSS
  // //===================================================================
  // app.get("/style.css", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/css/style.css"));
  // });
  //
  // app.get("/login.css", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/css/login.css"));
  // });
  //
  // //loads JS
  // //===================================================================
  // app.get("/acctDetail.js", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/js/acctDetail.js"));
  // });
  //
  // app.get("/acctList.js", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/js/acctList.js"));
  // });
  //
  // app.get("/login.js", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/js/login.js"));
  // });
};
