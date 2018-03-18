var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {

    // res.sendFile(path.join(__dirname, "../public/login.html"));

    res.render("index");


  });

  // index route loads view.html
  app.get("/acctDetail.js", function(req, res) {

    // res.sendFile(path.join(__dirname, "../public/login.html"));

    res.sendFile(path.join(__dirname, "../public/js/acctDetail.js"));

  });

  app.get("/api/:param?", function(req, res) {
    res.render("index")
    console.log(param);
    console.log(res);
    console.log(req);
  });
  // index route loads view.html
  app.get("/acctList.js", function(req, res) {

    // res.sendFile(path.join(__dirname, "../public/login.html"));

    res.render("index");


  });
  // index route loads view.html
  app.get("/add.js", function(req, res) {

    // res.sendFile(path.join(__dirname, "../public/login.html"));

    res.render("index");


  });
  // index route loads view.html
  app.get("/login.js", function(req, res) {

    // res.sendFile(path.join(__dirname, "../public/login.html"));

    res.render("index");


  });
  // index route loads view.html
  app.get("/view.js", function(req, res) {

    // res.sendFile(path.join(__dirname, "../public/login.html"));

    res.render("index");


  });

  // add route loads the add.html page,
  // where users can add new users to the db
  // app.get("/add", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/add.html"));
  // });




};
