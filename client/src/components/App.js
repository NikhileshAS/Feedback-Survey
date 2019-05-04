import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout";
import { connect } from "react-redux";

import * as actions from "../store/actions/action";
import Surveys from "./Surveys";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" exact>
            Landing
          </Route>
          <Route path="/surveys" exact component={Surveys} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
