import React from "react";
import { connect } from "react-redux";
import { Card, Row, Col, Typography } from "antd";

class MySurveys extends React.Component {
  render() {
    const { survey } = this.props;

    const renderCardData = () => {
      return Object.keys(survey || []).map((data, index) => {
        return (
          <Card
            key={index}
            title={survey[data].title}
            style={{ padding: 5, margin: 20 }}
          >
            <Card.Meta
              title={survey[data].subject}
              style={{ padding: 5, paddingTop: 10 }}
            >
              <div>{survey[data].subject}</div>
            </Card.Meta>
            <Row
              type="flex"
              gutter={12}
              style={{ paddingLeft: 10, paddingTop: 15 }}
            >
              <Typography.Title style={{ fontSize: 20 }}>
                Body:
              </Typography.Title>
            </Row>
            <Row
              type="flex"
              gutter={12}
              style={{ paddingLeft: 15, paddingTop: 10 }}
            >
              <Typography style={{ fontSize: 18 }}>
                {survey[data].body}
              </Typography>
            </Row>
            <Row
              type="flex"
              gutter={12}
              style={{ paddingLeft: 15, paddingTop: 10, paddingBottom: 0 }}
            >
              <Col xs={4} lg={6}>
                <Typography style={{ fontSize: 17 }}>
                  Yes: {survey[data].yes}
                </Typography>
              </Col>
              <Col xs={4} lg={6}>
                <Typography style={{ fontSize: 17 }}>
                  No: {survey[data].no}
                </Typography>
              </Col>
            </Row>
          </Card>
        );
      });
    };

    return (
      <React.Fragment>
        <Typography.Title style={{ textAlign: "center" }}>
          My Surveys
        </Typography.Title>
        {renderCardData()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ survey }) => {
  return { survey };
};
export default connect(mapStateToProps)(MySurveys);
