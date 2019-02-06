import React from "react";
import { Menu, Icon } from "antd";

export default function PageHeader({ siderStatus, isSignedIn }) {
  return (
    <div className="logo">
      <Menu
        theme="dark"
        // mode="inline"
        // onClick={this.handleClick}
        // selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="1">
          <Icon type="user" />

          <span className="nav-text">Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          {isSignedIn ? (
            <span>
              <Icon type="video-camera" />
              <span className="nav-text">New Reservation</span>
            </span>
          ) : null}
        </Menu.Item>
        <Menu.Item key="3">
          {isSignedIn ? (
            <span>
              <Icon type="upload" />
              <span className="nav-text">Contact</span>
            </span>
          ) : null}
        </Menu.Item>
        <Menu.Item key="4">
          {isSignedIn ? (
            <span>
              <Icon type="user" />
              <span className="nav-text">About</span>
            </span>
          ) : null}
        </Menu.Item>
      </Menu>
    </div>
  );
}
