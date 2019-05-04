const express = require("express");
const mongoose = require("mongoose");
const cookie_session = require("cookie-session");
const passport = require("passport");
const cors = require("cors");

const mongodbKey = require("./configs/keys").MONGODB_URI;
const cookieKey = require("./configs/keys").COOKIE_KEY;
require("./models/user");
require("./services/passport");

mongoose.connect(mongodbKey, { useNewUrlParser: true });
console.log("Application started");
const app = express();
app.use(cors());
app.use(
  cookie_session({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [cookieKey] })
);
app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
