const express = require("express");
require("./services/passport");

const app = express();
require("./routes/authenticationRoutes")(app);



const port = process.env.PORT || 5000;
app.listen(`${port}`, () => {
  console.log(`Express server listening on port https://localhost:${port}`);
});
