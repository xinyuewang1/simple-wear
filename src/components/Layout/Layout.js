import React from "react";

import styles from "./Layout.module.css";

import Aux from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => (
  <Aux>
    <Toolbar />
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
