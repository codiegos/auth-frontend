import { Row } from "antd";
import React from "react";
import AppForm from "../components/AppForm";
import AppHeader from "../components/AppHeader";

function Login() {
  return (
    <>
      <AppHeader />
      <Row justify="center">
        <AppForm />
      </Row>
    </>
  );
}

export default Login;
