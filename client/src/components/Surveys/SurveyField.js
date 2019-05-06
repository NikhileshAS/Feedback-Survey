import React from "react";
import { Input } from "antd";

export default ({ input, label, meta: { error, touched }, email }) => {
  return (
    <div style={{ padding: 10 }}>
      <label>{label}</label>
      <Input {...input} style={{ width: "80%" }} size="large" />
      <h5 style={{ color: "red" }}>{touched && error}</h5>
      {email ? (
        <h6 style={{ textAlign: "center" }}>
          Eg: email123@gmail.com, email5432@gmail.com, mail@emaily.com
        </h6>
      ) : null}
    </div>
  );
};
