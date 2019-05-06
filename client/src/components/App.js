import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout";
import { connect } from "react-redux";

import * as actions from "../store/actions/action";
import SurveyNew from "./Surveys/SurveyNew";
import Dashboard from "./Dashboard";
const Landing = () => <div>Landing</div>;
class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/surveys/new" component={SurveyNew} />
          <Route exact path="/surveys" component={Dashboard} />
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
