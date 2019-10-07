import React from "react";

import Logo from "../../Logo/Logo";
import NavItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

import Style from "./SideDrawer.module.css";

const SideDrawer = props => {
  let attachedStyles = [Style.SideDrawer, Style.Close];
  if (props.open) {
    attachedStyles = [Style.SideDrawer, Style.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedStyles.join(" ")}>
        <div className={Style.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems></NavItems>
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
