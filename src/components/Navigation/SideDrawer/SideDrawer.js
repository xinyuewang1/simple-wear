import React from "react";

import Logo from "../../Logo/Logo";
import NavgationItems from "../NavigationItems/NavigationItems";
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
      <div className={attachedStyles.join(" ")} onClick={props.closed}>
        <div className={Style.Logo}>
          <Logo />
        </div>
        <nav>
          <NavgationItems isAuth={props.isAuth}></NavgationItems>
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
