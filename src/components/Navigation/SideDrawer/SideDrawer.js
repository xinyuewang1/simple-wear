import React from "react";

import Logo from "../../Logo/Logo";
import NavItems from "../NavigationItems/NavigationItems";

import Style from "./SideDrawer.module.css";

const SideDrawer = props => {
  return (
    <div className={Style.SideDrawer}>
      <div className={Style.Logo}>
        <Logo />
      </div>
      <nav>
        <NavItems></NavItems>
      </nav>
    </div>
  );
};

export default SideDrawer;
