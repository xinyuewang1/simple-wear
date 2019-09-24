import React from "react";

import Style from "./Toolbar.module.css";

import Logo from "../../Logo/Logo";
import NavItems from "../NavigationItems/NavigationItems";

const Toolbar = props => (
  <header className={Style.Toolbar}>
    <div>Menu</div>
    <div className={Style.Logo}>
      <Logo />
    </div>
    <nav className={Style.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default Toolbar;
