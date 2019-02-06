import React, { Component } from "react";
import MainLayout from "./layout/Layout";
import Header from "./layout/Header";
import Sider from "./layout/Sider";

import SignIn from "./login/Signin";
import OperatorDashboard from "./dashboard/OperatorDashboard";
import "./App.css";
import Config from "./Fetch/ConfigData";

const URL =
  process.env.NODE_ENV === "production" ? Config.prodURL : Config.devURL;

class App extends Component {
  state = {
    siderStatus: "header",
    headerHide: true,
    siderHide: true,
    route: "operator-dashboard",
    currentUser: null,
    isSignedIn: false
  };

  onRouteChange = route => {
    if (route === "login") {
      this.setState({ route });
    } else if (route === "operator-dashboard") {
      this.setState({ route: route, isSignedIn: true, currentUser: "Andri" });
    }
    this.setState({ route });
  };

  render() {
    const { siderStatus, route, isSignedIn } = this.state;

    return (
      <MainLayout
        onSiderChange={this.onSiderChange}
        headerHide={this.state.headerHide}
        siderHide={this.state.siderHide}
        sider={<Sider siderStatus={siderStatus} />}
        header={<Header siderStatus={siderStatus} isSignedIn={isSignedIn} />}
      >
        {route === "login" ? (
          <SignIn URL={URL} onRouteChange={this.onRouteChange} />
        ) : route === "operator-dashboard" ? (
          <OperatorDashboard URL={URL}/>
        ) : null}
      </MainLayout>
    );
  }
}

export default App;
