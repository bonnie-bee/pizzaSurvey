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

  app.post("/api/survey", function (req, res) {
    let userId = (req.session.passport.user.id);
    db.Reviews.create({
      city: req.body.city,
      place: req.body.place,
      appearance: req.body.appearance,
      grease: req.body.grease,
      cheese: req.body.cheese,
      sauce: req.body.sauce,
      toppings: req.body.toppings,
      crust: req.body.crust,
      mouthfeel: req.body.mouthfeel,
      taste: req.body.taste,
      total: req.body.total,
      //local sql database spelling
      user_id: userId
      //heroku database spelling
      // UserId: userId
    }).then(function () {
      res.json("/results")
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    })
  })
};
