var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/home", function(req, res) {
    res.render("index");
  });
  
  app.get("/survey", isAuthenticated, function(req, res){
    res.render("survey");
  })
};
