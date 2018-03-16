var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  // add route loads the add.html page,
  // where users can add new users to the db
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  


};
