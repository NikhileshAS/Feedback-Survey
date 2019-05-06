const mongoose = require("mongoose");

const RequireLogin = require("../middlewares/requireLogin");
const CheckCredits = require("../middlewares/checkCredits");
const Mailer = require("../services/mailer");
const template = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", RequireLogin, CheckCredits, async (req, res) => {
    const { title, body, subject, recipients } = req.body;
    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipients.split(", ").map(email => ({ email })),
      _user: req.user.id,
      dateSent: Date.now()
    });
    const mailer = new Mailer(survey, template(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
