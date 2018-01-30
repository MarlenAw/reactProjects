const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post('/api/dashboard', requireLogin, (req, res) => {
    
  });
}
