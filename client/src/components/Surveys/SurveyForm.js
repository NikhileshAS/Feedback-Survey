import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { Button } from "antd";

import Input from "./SurveyField";
import * as constants from "../../constants";
import FIELDS from "./fields";

class SurveyForm extends React.Component {
  renderFields() {
    return (
      <h4>
        {FIELDS.map(({ name, label, email }) => {
          return (
            <Field
              key={name}
              component={Input}
              name={name}
              label={label}
              type="text"
              email={email || false}
            />
          );
        })}
      </h4>
    );
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys">
            <Button
              style={{
                backgroundColor: constants.THEME_GREY,
                color: constants.THEME_MAROON
              }}
            >
              {" "}
              Cancel{" "}
            </Button>
          </Link>
          <button
            style={{
              backgroundColor: constants.THEME_GREY,
              color: constants.THEME_MAROON
            }}
            type="submit"
          >
            Checkout
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (values.recipients) {
    const invalidEmails = values.recipients
      .split(", ")
      .map(email =>
        email
          .trim()
          .trim(", ")
          .trim(",")
      )
      .filter(email => re.test(email) === false);
    if (invalidEmails.length >= 1) {
      errors.recipients = "One or more emails are invalid";
    }
  }
  if (!values.recipients) {
    errors.recipients = "Enter emails to survey";
  }
  if (!values.title) {
    errors.title = "Add title here";
  }
  if (!values.body) {
    errors.body = "Empty email cannot be sent";
  }
  if (!values.subject) {
    errors.subject = "Subject of the mail cannot be empty";
  }
  return errors;
}
export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
