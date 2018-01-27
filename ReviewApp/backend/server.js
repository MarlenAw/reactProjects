const express = require("express");
const mongoose = require('mongoose');
const keys = require('../config/keys');
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();
require("./routes/authenticationRoutes")(app);



const port = process.env.PORT || 5000;
app.listen(`${port}`, () => {
  console.log(`Express server listening on port https://localhost:${port}`);
});
