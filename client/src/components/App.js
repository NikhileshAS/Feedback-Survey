import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout";
import { connect } from "react-redux";

import * as actions from "../store/actions/action";
import Surveys from "./Surveys";

const Landing = () => <div>Landing</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/surveys" component={Surveys} />
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
