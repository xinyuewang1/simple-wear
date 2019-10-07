import React from "react";

import Style from "./Toolbar.module.css";

import Logo from "../../Logo/Logo";
import NavItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => (
  <header className={Style.Toolbar}>
    <DrawerToggle clicked={props.DrawerToggleClicked} />
    <div className={Style.Logo}>
      <Logo />
    </div>
    <nav className={Style.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default Toolbar;
