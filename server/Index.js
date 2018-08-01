require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const strategy = require(`${__dirname}/strategy.js`);

const passport = require("passport");

const controller = require("./controller");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(
  session({
    secret: "sup dude",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser(function(user, done) {
  console.log("this is user", user);
  done(null, {
    id: user.id,
    name: user.name,
    picture: user.picture

    // put on any additional stuff you want to save
  });
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "/me",
    failureRedirect: "/login",
    failureFlash: true
  })
);

app.get("/me", (req, res, next) => {
  if (!req.user) {
    res.redirect("/login");
  } else {
    //here make a call to your database to store all the user info you want to

    res.status(200).send(JSON.stringify(req.user, null, 10));
  }
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
