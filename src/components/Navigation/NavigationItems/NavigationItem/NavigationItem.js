import React, { useState } from "react";
import { Link } from "react-router-dom";

import Style from "./NavigationItem.module.css";

import SideDrawerContext from "../../../../context/SideDrawerContext";

// expect props: link, active.
const NavigationItem = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  return (
    <li className={Style.NavigationItem}>
      <SideDrawerContext.Provider value={{ showSideDrawer: showSideDrawer }}>
        <Link
          to={props.link}
          className={props.active ? Style.active : null}
          onClick={() => setShowSideDrawer(false)}
        >
          {props.children}
        </Link>
      </SideDrawerContext.Provider>
    </li>
  );
};

export default NavigationItem;
