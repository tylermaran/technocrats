var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {

    // res.sendFile(path.join(__dirname, "../public/login.html"));

    res.render("login");


  });

  // index route loads view.html
  app.get("/acctDetail.js", function(req, res) {

    // res.sendFile(path.join(__dirname, "../public/login.html"));

    res.sendFile(path.join(__dirname, "../public/js/acctDetail.js"));
 
  });


  app.get("/acctList.js", function(req, res) {

    // res.sendFile(path.join(__dirname, "../public/login.html"));

    res.sendFile(path.join(__dirname, "../public/js/acctList.js"));


  });
  // index route loads view.html
  app.get("/add.js", function(req, res) {

    // res.sendFile(path.join(__dirname, "../public/login.html"));

    res.sendFile(path.join(__dirname, "../public/js/add.js"));


  });
  // index route loads view.html
  app.get("/login.js", function(req, res) {

    // res.sendFile(path.join(__dirname, "../public/login.html"));

    res.sendFile(path.join(__dirname, "../public/js/login.js"));


  });
  // index route loads view.html
  app.get("/view.js", function(req, res) {

    // res.sendFile(path.join(__dirname, "../public/login.html"));

    res.sendFile(path.join(__dirname, "../public/js/view.js"));


  });

  // add route loads the add.html page,
  // where users can add new users to the db
  // app.get("/add", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/add.html"));
  // });




};
