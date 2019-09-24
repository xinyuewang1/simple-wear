import React from "react";

import Style from "./Toolbar.module.css";

import Logo from "../../Logo/Logo";
import NavItems from "../NavigationItems/NavigationItems";

const Toolbar = props => (
  <header className={Style.Toolbar}>
    <div>Menu</div>
    <Logo />
    <nav>
      <NavItems />
    </nav>
  </header>
);

export default Toolbar;
