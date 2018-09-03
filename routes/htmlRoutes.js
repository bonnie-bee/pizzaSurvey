var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
let sequelize = require("sequelize");

module.exports = function(app) {

  app.get("/a", function(req, res) {
    res.render("index");
  });
  
  app.get("/survey", isAuthenticated, function(req, res){
    res.render("survey");
  })

  app.get("/results", function(req, res){

    db.Reviews.findAll({ limit: 1, order: [ ['total', 'DESC'] ] }).then(function(events){
      console.log(events[0].dataValues.place)
      const bestPlace = [
        {place: events[0].dataValues.place}
    ]
    console.log(bestPlace[0].place) 
    res.render("results", {bP: bestPlace})
    })
  })
};
