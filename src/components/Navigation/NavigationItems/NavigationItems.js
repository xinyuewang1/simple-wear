import React from "react";

import Style from "./NavigationItems.module.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
  <ul className={Style.NavigationItems}>
    <NavigationItem link="/">Today</NavigationItem>
    <NavigationItem link="/settings">Adv. Settings</NavigationItem>
    <NavigationItem link="/story">Story</NavigationItem>
  </ul>
);

export default NavigationItems;
