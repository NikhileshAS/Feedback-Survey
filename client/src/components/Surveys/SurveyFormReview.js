import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { Link } from "react-router-dom";

import FIELDS from "./fields";
import * as constants from "../../constants";
import { submitSurvey } from "../../store/actions/action";

function SurveyFormReview({ onCancel, values, submitSurvey }) {
  return (
    <div>
      <h3>Confirm your survey data</h3>
      {FIELDS.map(({ label, name }) => {
        return (
          <h3 key={label}>
            <label>{label.replace("* ", "")}</label>
            {values[name]}
          </h3>
        );
      })}
      <Button
        style={{
          backgroundColor: constants.THEME_GREY,
          color: constants.THEME_MAROON
        }}
        onClick={onCancel}
      >
        Edit
      </Button>
      <Link to="/surveys">
        <Button
          icon="mail"
          style={{
            backgroundColor: constants.THEME_GREY,
            color: constants.THEME_MAROON
          }}
          onClick={() => submitSurvey(values)}
        >
          Send Email
        </Button>
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  return { values: state.form.surveyForm.values };
}

export default connect(
  mapStateToProps,
  { submitSurvey }
)(SurveyFormReview);
