import React from "react";

import { ReactComponent as Icon } from "../../assets/ClothingSvg_icon/icon.svg";

import Style from "./Logo.module.css";

const Logo = () => (
  <div className={Style.Logo}>
    <Icon />
  </div>
);

export default Logo;
