const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const googleClientID = require("../configs/keys").GOOGLE_CLIENT_ID;
const googleSecret = require("../configs/keys").GOOGLE_SECRET_KEY;

const User = mongoose.model("users");

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) =>
  User.findById(id).then(user => done(null, user))
);
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(user => {
        if (!user) {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
        done(null, user);
      });
    }
  )
);
