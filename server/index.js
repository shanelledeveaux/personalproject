const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const port = process.env.PORT || 3001;
require("dotenv").config();
const axios = require("axios");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

const mc = require(`./controller`);

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "HELLO",
    resave: false,
    saveUninitialized: false
  })
);

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new Auth0Strategy(
    {
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/login",
      scope: "openid email profile"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  console.log(user);
  app
    .get("db")
    .get_user(user.id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .add_user([user.displayName, user.id, user.emails[0].value])
          .then(res => {
            return done(null, res[0]);
          })
          .catch(err => console.log(err));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/Dash",
    failureRedirect: "/login"
  })
);

function authenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

//FAMILY SUBMIT
app.get(`/api/family`, authenticated, mc.getFamily);
app.delete(`/api/family/:id`, mc.removeFamily);
app.post(`/api/family`, mc.submitFamily);

//PERSON SUBMIT
app.get(`/api/person/:familyid`, mc.getPerson);
app.delete(`/api/person/:id`, mc.removePerson);
app.post(`/api/person`, mc.submitPerson);

//CASENOTES SUBMIT
app.get(`/api/notes/:familyid`, mc.getNotes);
app.delete(`/api/notes/:id`, mc.removeNotes);
app.post(`/api/notes`, mc.submitCaseNotes);

//DEMOGRAPHIC SUBMIT
app.get(`/api/demo/:familyid`, mc.getDemo);
app.delete(`/api/demo/:id`, mc.removeDemo);
app.post(`/api/demo`, mc.submitDemo);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
