const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

module.exports = app => {
  app.post('/api/dashboard', requireLogin, requireCredits, (req, res) => {  //check if the user loggedin first, then check if the user has credits! 

  });
}
