var db = require("../models");
var passport = require("../services/passportStrategy");

module.exports = function (app) {
  // Get all examples
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    //send the user the route so it'll be redirected in the front end (can't post into a GET request from a POST)
    res.json("/survey");
  }),
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.Users.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });
  })
};
