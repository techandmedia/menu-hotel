import React from "react";
import { Menu, Icon } from "antd";

export default function Sider({ siderStatus }) {
  return (
    <div className="logo">
      <Menu
        theme="dark"
        mode="inline"
        // onClick={this.handleClick}
        // selectedKeys={[this.state.current]}
        // mode="horizontal"
      >
        <Menu.Item key="1">
          <Icon type="user" />

          <span className="nav-text">Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />

          <span className="nav-text">About</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">Contact</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
      </Menu>
    </div>
  );
}
