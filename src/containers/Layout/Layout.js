import React, { useState } from "react";

import styles from "./Layout.module.css";

import Aux from "../Auxiliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import SideDrawerContext from "../../context/SideDrawerContext";

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const SideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  const SideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Aux>
      <SideDrawerContext.Provider
        value={{ showSideDrawer, SideDrawerCloseHandler }}
      >
        <Toolbar DrawerToggleClicked={SideDrawerToggleHandler} />

        <SideDrawer closed={SideDrawerCloseHandler} open={showSideDrawer} />
      </SideDrawerContext.Provider>

      <main className={styles.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
