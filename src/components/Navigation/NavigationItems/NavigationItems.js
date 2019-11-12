import React from "react";

import Style from "./NavigationItems.module.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
  <ul className={Style.NavigationItems}>
    <NavigationItem link="/" active>
      Today
    </NavigationItem>
    <NavigationItem link="/">Adv. Settings</NavigationItem>
    <NavigationItem link="/story">Story</NavigationItem>
  </ul>
);

export default NavigationItems;
