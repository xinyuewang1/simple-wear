import React from "react";

import Style from "./Toolbar.module.css";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => (
  <header className={Style.Toolbar}>
    <DrawerToggle clicked={props.DrawerToggleClicked} />
    <div className={Style.Logo}>
      <Logo />
    </div>
    <nav className={Style.DesktopOnly}>
      <NavigationItems isAuth={props.isAuth} />
    </nav>
  </header>
);

export default Toolbar;
