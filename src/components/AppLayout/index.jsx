import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
import React from "react";

const { Header, Content } = Layout;

function AppLayout({ children }) {
  return (
    <Layout
      className="site-layout"
      style={{ background: "#fafafa", height: "100vh" }}
    >
      <Header
        className="site-layout-background"
        style={{ background: "#5A54BE" }}
      >
        <div className="logo" />
      </Header>

      <Content className="site-layout-background">
       {children}
      </Content>
      <Footer align="center">
        Lorem ipsum dolor sit amet, consectetur adipisicing Aperiam corporis
        iure, officiis illum dicta quas non unde obcaecati voluptas. Mollitia
        est amet cupiditate delectus facilis.
      </Footer>
    </Layout>
  );
}

export default AppLayout;
