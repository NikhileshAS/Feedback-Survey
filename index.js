const express = require("express");
const mongoose = require("mongoose");
const cookie_session = require("cookie-session");
const passport = require("passport");
//prod WzKopyldVKXX0LkIz1z5Fr1K, 951589064813-908q2k4ui6vvonreui8dq3hlcv4r3i4i.apps.googleusercontent.com
const mongodbKey = require("./configs/keys").MONGODB_URI;
const cookieKey = require("./configs/keys").COOKIE_KEY;
require("./models/user");
require("./services/passport");

mongoose.connect(mongodbKey, { useNewUrlParser: true });
console.log("Application started");
const app = express();
app.use(
  cookie_session({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [cookieKey] })
);
app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
