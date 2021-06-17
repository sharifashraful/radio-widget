import React from "react";
import { configure, shallow, ShallowWrapper, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";
import {
  RadioStation
} from "../../@types/reducerType";

configure({ adapter: new Adapter() });

let station:RadioStation = {
  stationName: "Test",
  stationId: "1",
  frequency: 1111
}

describe("Footer", () => {
  let container: ShallowWrapper;

  beforeEach(() => {
    container = shallow(<Footer selectedStation={station} />);
  });

  it("should render selected station name", () => {
    expect(container.find('.selectedStationStyle').length).toEqual(1);
  });

  it("should not render selected station name", () => {
    container = shallow(<Footer />);
    expect(container.find('.selectedStationStyle').length).toEqual(0);
  });

});