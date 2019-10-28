import React, { Component } from "react";

import styles from "./Layout.module.css";

import Aux from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  SideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  SideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !this.state.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar DrawerToggleClicked={this.SideDrawerToggleHandler} />
        <SideDrawer
          closed={this.SideDrawerCloseHandler}
          open={this.state.showSideDrawer}
        />
        <main className={styles.Content}>{this.props.children}</main>
        {/* TODO - move this to a proper footer */}
        <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
      </Aux>
    );
  }
}

export default Layout;
