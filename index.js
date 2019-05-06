const express = require("express");
const mongoose = require("mongoose");
const cookie_session = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");

const mongodbKey = require("./configs/keys").MONGODB_URI;
const cookieKey = require("./configs/keys").COOKIE_KEY;
require("./models/user");
require("./models/survey");
require("./services/passport");

mongoose.connect(mongodbKey, { useNewUrlParser: true });
console.log("Application started");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(
  cookie_session({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [cookieKey] })
);

app.use(passport.initialize());

app.use(passport.session());
// Bundles preferred strategy.
// Serializes and deserialzes the user from req object via passport

require("./routes/authRoutes")(app);
require("./routes/paymentRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
