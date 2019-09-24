import React from "react";

import Style from "./Toolbar.module.css";

import Logo from "../../Logo/Logo";

const Toolbar = props => (
  <header className={Style.Toolbar}>
    <div>Menu</div>
    <Logo />
    <nav>...</nav>
    <div>Building story</div>
  </header>
);

export default Toolbar;
