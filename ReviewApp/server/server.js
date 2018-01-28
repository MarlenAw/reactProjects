const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("../config/keys");

require("./database/User"); //this line has to be above require(passport
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authenticationRoutes")(app);

const port = process.env.PORT || 5000;
app.listen(`${port}`, () => {
  console.log(`Express server listening on port https://localhost:${port}`);
});
