import React from "react";

import Style from "./NavigationItems.module.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => (
  <ul className={Style.NavigationItems}>
    <NavigationItem link="/">Today</NavigationItem>
    {props.isAuth ? (
      <NavigationItem link="/settings">Adv. Settings</NavigationItem>
    ) : null}
    <NavigationItem link="/story">Story</NavigationItem>
    {props.isAuth ? (
      <NavigationItem link="/logout">Log Out</NavigationItem>
    ) : (
      <NavigationItem link="/auth">Log In </NavigationItem>
    )}
  </ul>
);

export default NavigationItems;
