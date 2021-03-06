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
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ googleId: profile.id });
      if (!user) {
        const user = await new User({ googleId: profile.id }).save();
        return done(null, user);
      }
      done(null, user);
    }
  )
);
