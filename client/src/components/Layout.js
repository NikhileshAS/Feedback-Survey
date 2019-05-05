import { Layout, Button, Typography } from "antd";
import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

import * as constants from "../constants";
import Payment from "./Payment";

const { Header, Content } = Layout;

const button = props => {
  if (props.auth === false || props.auth === null) {
    return "Login with Google";
  } else {
    return "Logout";
  }
};
class EmailyLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header
          style={{
            backgroundColor: "#B22222",
            display: "flex",
            padding: 15
          }}
        >
          <Link to={this.props.auth ? "/surveys" : "/"} style={{ flex: 1 }}>
            <Typography.Title
              style={{ flex: 1, fontSize: 60, color: constants.THEME_GREY }}
            >
              Emaily Feedback Survey
            </Typography.Title>
          </Link>
          {this.props.auth ? (
            <div style={{ display: "flex" }}>
              <Payment />
              <Typography
                style={{
                  paddingLeft: 20,
                  color: "#6B8E23",
                  fontSize: 20,
                  fontWeight: 30
                }}
              >
                Credits : {this.props.auth.credits}
              </Typography>
            </div>
          ) : null}
          <ul>
            <a href={this.props.auth ? "/api/logout" : "/auth/google"}>
              <Button type="default">{button(this.props)}</Button>
            </a>
          </ul>
        </Header>
        <Content style={{ color: "black", marginTop: 30 }}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(EmailyLayout);
