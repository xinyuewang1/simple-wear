import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });
  it("shoud render 3 <NavigationItem /> elements if not authenticated", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it("shoud render 4 <NavigationItem /> elements if authenticated", () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(4);
  });

  it("shoud contains logout page if authenticated", () => {
    wrapper.setProps({ isAuth: true });
    expect(
      wrapper.contains(<NavigationItem link="/logout">Log Out</NavigationItem>)
    ).toEqual(true);
  });
});
