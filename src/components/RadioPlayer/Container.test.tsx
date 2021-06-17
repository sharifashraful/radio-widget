import React from "react";
import { configure, shallow, ShallowWrapper, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Container from "./Container";

configure({ adapter: new Adapter() });

describe("Radio Player", () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<Container />);
  });

  it("should render sound decrease controller", () => {
    expect(container.find('.minusButton').length).toEqual(1);
  });

  it("should render sound increase controller", () => {
    expect(container.find('.plusButton').length).toEqual(1);
  });

});