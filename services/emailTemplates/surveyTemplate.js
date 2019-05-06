const link = require("../../configs/keys").FEEDBACK_EMAIL_LINK;
module.exports = survey => {
  return `
    <div>
    <h2>Feedback from Emaily Feedback Survey</h2>
    <h4>Take a moment to review us.</h4>
    <h4>${survey.body}</h4>
    <h4>Did you like our service ?</h4>
    <a href="${link}/api/surveys/${survey.id}/yes">Yes</a>
    <a href="${link}/api/surveys/${survey.id}/no">No</a>
    </div>`;
};
