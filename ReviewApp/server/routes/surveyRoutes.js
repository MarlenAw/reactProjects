const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const Survey = mongoose.model('surveys');

module.exports = app => {

  app.get('/api/dashboard/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });

  app.post('/api/dashboard', requireLogin, requireCredits, async (req, res) => {  //check if the user loggedin first, then check if the user has credits!
    const { title, subject, body, recipients } = req.body; //taking it from surveySchema

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })), //recipients array contains a list of emails..so split to get only the emails without the comma and then do map
      _user: req.user.id, //link the current user to the survey here..and this id = req.user.id = mongoose has generated it ..also check passport.js
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));


    try{
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);

    }catch (err){
      res.status(422).send(err);
    }

  });
}



// .map(email => ({ email }) is exactly this :
// .map(email => { return {email: email}});
