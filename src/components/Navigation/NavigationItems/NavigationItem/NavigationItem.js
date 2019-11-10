import React from "react";
import { Link } from "react-router-dom";

import Style from "./NavigationItem.module.css";

// expect props: link, active.
const NavigationItem = props => (
  <li className={Style.NavigationItem}>
    <Link to={props.link} className={props.active ? Style.active : null}>
      {props.children}
    </Link>
  </li>
);

export default NavigationItem;
