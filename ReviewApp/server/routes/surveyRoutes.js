const _ = require("lodash");
const Path = require("path-parser");
const { URL } = require("url")
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const Survey = mongoose.model('surveys');

module.exports = app => {

  app.get('/api/dashboard', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({recipients: false});

    res.send(surveys);
  });

  app.get('/api/dashboard/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
  });

  app.post('/api/dashboard/webhooks', (req, res) =>{

    // const events = _.map(req.body, (event) => {
    //
    //   const pathname = new URL(event.url).pathname;
    //   const p = new Path('/api/dashboard/:surveyId/:choice');
    //   const match = p.test(pathname);
    //
    //   if(match){
    //     return {email: event.email, surveyId: match.surveyId, choice: match.choice};
    //   }
    // });
    //
    // const compactEvents = _.compact(events); // this line is for NOT returning any elemnts that are UNDEFINED
    // const uniqueEvents = _.uniqBy(compactEvents, 'emails', 'surveyId'); //this line is to make sure we don't have any duplicates of email or surveyId
    //
    // console.log(uniqueEvents);
    //
    // res.send({});

    // REFACTORINGGGGGGG

    const p = new Path('/api/dashboard/:surveyId/:choice');

     _.chain(req.body)
      .map(({email, url}) => {
        const match = p.test(new URL(url).pathname);
          if(match){
                return {email, surveyId: match.surveyId, choice: match.choice};
          }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({surveyId, email, choice}) => {
          Survey.updateOne({
            _id: surveyId,
            recipients: {
            $elemMatch: {email: email, responded: false}
            }
          }, {
            $inc: { [choice]: 1 },
            $set: { 'recipients.$.responded': true },
            lastResponded: new Date()
          }).exec(); //exec = excute
      })
      .value();

      res.send({});
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
