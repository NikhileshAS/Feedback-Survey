const mongoose = require("mongoose");
const _ = require("lodash");
const Path = require("path-parser").default;
const { URL } = require("url");

const RequireLogin = require("../middlewares/requireLogin");
const CheckCredits = require("../middlewares/checkCredits");
const Mailer = require("../services/mailer");
const template = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys/webhooks", (req, res) => {
    _.chain(req.body)
      .map(({ url, email }) => {
        const result = new Path("/api/surveys/:surveyId/:choice").test(
          new URL(url).pathname
        );
        if (result) {
          return { email, surveyId: result.surveyId, choice: result.choice };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false }
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date()
          }
        ).exec();
      })
      .value();

    res.send({});
  });

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
