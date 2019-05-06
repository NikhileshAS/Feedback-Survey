import React from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { reduxForm } from "redux-form";

export default reduxForm({ form: "surveyForm" })(
  class SurveyNew extends React.Component {
    state = {
      showReview: false
    };
    render() {
      return (
        <div style={{ textAlign: "center" }}>
          <h2>Create New Survey</h2>
          <div>
            {this.state.showReview ? (
              <SurveyFormReview
                onCancel={() => this.setState({ showReview: false })}
              />
            ) : (
              <SurveyForm
                values={this.state.values}
                onSurveySubmit={() => this.setState({ showReview: true })}
              />
            )}
          </div>
        </div>
      );
    }
  }
);
