import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Style from "./NavigationItem.module.css";

import SideDrawerContext from "../../../../context/SideDrawerContext";

// expect props: link, active.
const NavigationItem = props => {
  const drawer = useContext(SideDrawerContext);

  return (
    <li className={Style.NavigationItem}>
      <Link
        to={props.link}
        className={props.active ? Style.active : null}
        onClick={drawer.SideDrawerCloseHandler}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default NavigationItem;
