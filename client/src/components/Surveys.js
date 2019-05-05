import React from "react";
import { Row, Col } from "antd";

import * as constants from "../constants";
export default class Surveys extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={18} push={10} style={{ fontSize: 48 }}>
            Emaily
          </Col>
        </Row>
        <Row>
          <Col
            span={18}
            push={9}
            style={{ color: constants.THEME_GREY, fontSize: 20 }}
          >
            Online feedback survey portal
          </Col>
        </Row>
      </div>
    );
  }
}
