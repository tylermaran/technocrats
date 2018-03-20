var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

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
