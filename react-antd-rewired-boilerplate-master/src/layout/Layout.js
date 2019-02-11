import React from "react";
import { Layout } from "antd";

const { Header, Content, Footer, Sider } = Layout;

export default function MainLayout(props) {
  console.log(props);
  return (
    <Layout>
      {!props.siderHide && (
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            // console.log("broken", broken);
          }}
          onCollapse={(collapsed, type) => {
            props.onSiderChange(collapsed);
            // console.log("cc", collapsed, type);
          }}
        >
          {props.sider}
        </Sider>
      )}

      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          {props.header}
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              // minHeight: 460,
              overflow: "initial"
            }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <a
            href="https://subarnanto.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "grey" }}
          >
            Created by Eko Andri Subarnanto <br />
            <span>Web Developer and Designer</span>
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
}
