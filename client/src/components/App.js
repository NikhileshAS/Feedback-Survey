import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout";
import { connect } from "react-redux";

import * as actions from "../store/actions/action";
import SurveyNew from "./Surveys/SurveyNew";
import MySurveys from "./Surveys/MySurveys";
const Landing = () => <div>Landing</div>;
const Thanks = () => <h3>Thank You</h3>;
class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchMySurveys();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/surveys/new" component={SurveyNew} />
          <Route exact path="/surveys" component={MySurveys} />
          {/* <Route exact path="/surveys/*" component={Thanks} /> */}
          <Route exact path="/" component={Landing} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
