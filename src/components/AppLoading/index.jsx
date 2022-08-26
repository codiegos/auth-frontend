import { Row, Spin } from "antd";
import React from "react";

function AppLoading() {
  return (
    <Row justify="center" align= "middle" style={{ height: "100vh" }}>
      <Spin size="large"></Spin>
    </Row>
  );
}

export default AppLoading;
