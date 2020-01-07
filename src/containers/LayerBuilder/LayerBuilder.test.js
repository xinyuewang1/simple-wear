import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { LayerBuilder } from "./LayerBuilder";
import Clothes from "../../components/Clothes/Clothes";

configure({ adapter: new Adapter() });

describe("<LayerBuilder />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LayerBuilder />);
  });

  it("should render <Clothes /> when clo and temp are defined", () => {
    wrapper.setProps({ clo: 1, temp: 5 });
    expect(wrapper.find(Clothes)).toHaveLength(1);
  });
});
