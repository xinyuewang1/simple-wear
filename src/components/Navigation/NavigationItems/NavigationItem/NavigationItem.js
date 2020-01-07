import React from "react";
import { NavLink } from "react-router-dom";

import Style from "./NavigationItem.module.css";

// expect props: link, active.
const NavigationItem = props => {
  return (
    <li className={Style.NavigationItem}>
      <NavLink to={props.link} exact activeClassName={Style.active}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
