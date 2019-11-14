import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Style from "./NavigationItem.module.css";

import SideDrawerContext from "../../../../context/SideDrawerContext";

// expect props: link, active.
const NavigationItem = props => {
  const drawer = useContext(SideDrawerContext);

  return (
    <li className={Style.NavigationItem}>
      <NavLink
        to={props.link}
        exact
        className={props.active ? Style.active : null}
        onClick={drawer.SideDrawerCloseHandler}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
