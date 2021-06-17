import React from "react";
import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RadioScreen from "./RadioScreen";
import RadioStationList from "../../components/RadioStationList";

configure({ adapter: new Adapter() });

describe("RadioScreen", () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<RadioScreen />);
  });

  it("should render a div", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("should render an instance of the RadioStationList", () => {
    expect(container.find(RadioStationList).length).toEqual(1);
  });

});
