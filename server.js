require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("./services/passportStrategy");

const db = require("./models");
const app = express();
const PORT = process.env.PORT || 8078;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

//sets up the passport method for user login/sign up
app.use(
    session({ secret: "ALYSSA'S_SECRET", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//getting handlebars ready
//potientially update this to not use handlebars; not sure how I feel about it
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//setting up routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//start the database and run the app
//false = don't drop tables when starting
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log(
        `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
      );
    });
  });
  
  module.exports = app;