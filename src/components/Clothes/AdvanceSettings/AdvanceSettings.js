import React from "react";

import Style from "./AdvanceSettings.module.css";

import SettingControl from "./SettingControl/SettingControl";

const AdvanceSetting = props => (
  <div className={Style.AdvSettings}>
    <SettingControl less={props.less} more={props.more} />
  </div>
);

export default AdvanceSetting;
