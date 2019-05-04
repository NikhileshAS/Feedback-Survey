import { Layout, Button, Typography } from "antd";
import { connect } from "react-redux";
import React from "react";

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
          <Typography.Title style={{ flex: 1, fontSize: 60, color: "grey" }}>
            Emaily Feedback Survey
          </Typography.Title>
          <a href={this.props.auth ? "/api/logout" : "/auth/google"}>
            <Button type="default">{button(this.props)}</Button>
          </a>
        </Header>
        <Content style={{ color: "black", marginTop: 30 }}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(EmailyLayout);
