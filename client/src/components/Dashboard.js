import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import * as constants from "../constants";

export default function Dashboard(props) {
  return (
    <div>
      <Link to="/surveys/new">
        <div style={{ textAlign: "right" }}>
          <Button
            type="primary"
            shape="circle"
            icon="plus"
            style={{
              backgroundColor: constants.THEME_MAROON,
              borderColor: constants.THEME_MAROON,
              color: constants.THEME_GREY
            }}
            size="large"
          />
        </div>
      </Link>
      <h2 style={{ textAlign: "center" }}>Dashboard</h2>
    </div>
  );
}
