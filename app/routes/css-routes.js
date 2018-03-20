var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  //loads CSS
  //===================================================================
  app.get("/style.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css/style.css"));
  });

  app.get("/login.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css/login.css"));
  });

};
