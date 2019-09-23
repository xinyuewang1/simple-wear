import React from "react";

import Style from "./SettingControl.module.css";

const SettingControl = props => (
  <div className={Style.SettingControl}>
    <button className={Style.TooHot} onClick={props.less}>
      Too Much
    </button>
    <button className={Style.TooCold} onClick={props.more}>
      Not Enough
    </button>
  </div>
);

export default SettingControl;
