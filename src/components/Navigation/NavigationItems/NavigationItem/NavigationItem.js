import React, { useState } from "react";
import { Link } from "react-router-dom";

import Style from "./NavigationItem.module.css";

import SideDrawerContext from "../../../../context/SideDrawerContext";

// expect props: link, active.
const NavigationItem = props => {
  const [sideDrawer, setSideDrawer] = useState(false);

  return (
    <SideDrawerContext.Provider value={{ showSideDrawer: sideDrawer }}>
      <li className={Style.NavigationItem} onClick={() => setSideDrawer(false)}>
        <Link to={props.link} className={props.active ? Style.active : null}>
          {props.children}
        </Link>
        {console.log(sideDrawer)}
      </li>
    </SideDrawerContext.Provider>
  );
};

export default NavigationItem;
