import React from "react";
import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<App />);
  });

  it("should render a div", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("should render an instance of the RadioScreen", () => {
    expect(container.find("RadioScreen").length).toEqual(1);
  });

});