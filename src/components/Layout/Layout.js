import React from "react";

import styles from "./Layout.module.css";

import Aux from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
