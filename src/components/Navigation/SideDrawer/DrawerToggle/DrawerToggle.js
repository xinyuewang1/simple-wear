import React from "react";

import Style from "./DrawerToggle.module.css";

const DrawerToggle = props => (
  <div onClick={props.clicked} className={Style.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
export default DrawerToggle;
