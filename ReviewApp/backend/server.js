const express = require("express");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const app = express();

const port = process.env.PORT || 5000;
app.listen(`${port}`, () => {
  console.log(`Express server listening on port https://localhost:${port}`);
});
