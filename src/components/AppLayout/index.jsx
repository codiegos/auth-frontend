import { Breadcrumb, Layout, Typography } from "antd";
import {Navigate} from 'react-router-dom';

import "./index.css";
import React from "react";
const { Link } = Typography;

const { Header, Content } = Layout;

function AppLayout() {
  return (
    <Layout className="site-layout" style={{ background: "#fafafa" }}>
      <Header
        className="site-layout-background"
        style={{ background: "rgb(24, 144, 255)" }}
      >
        <div className="logo" />
      </Header>
      <Breadcrumb
        style={{
          margin: "16px",
        }}
      >
        <Breadcrumb.Item>Login</Breadcrumb.Item>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Link href="/userdetails" target="_blank">
          
          <h1>Hello {}</h1>
        </Link>
      </Content>

    </Layout>
  );
}

export default AppLayout;
