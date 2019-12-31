import React, { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Layout.module.css";

import Aux from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const isAuthendicated = useSelector(state => state.auth.authed);

  const SideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  const SideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Aux>
      <Toolbar
        isAuth={isAuthendicated}
        DrawerToggleClicked={SideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={isAuthendicated}
        closed={SideDrawerCloseHandler}
        open={showSideDrawer}
      />

      <main className={styles.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
