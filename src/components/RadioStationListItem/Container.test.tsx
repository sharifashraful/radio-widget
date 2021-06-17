import React from "react";
import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  RadioStation
} from "../../@types/reducerType";
import Container from "./index";
import RadioPlayer from "../RadioPlayer";

configure({ adapter: new Adapter() });

interface Props {
  radioStation: RadioStation,
  onStationSelected: (station: RadioStation) => void,
  isSelected?: boolean
}

describe("Radion Station Item", () => {
  let container: ShallowWrapper;
  let props: Props = {
    radioStation: {
      stationName: "Test",
      stationId: "1",
      frequency: 1111
    },
    onStationSelected: () => {}
  }

  it("should not render Radion Player Control", () => {
    props.isSelected = false;
    container = shallow(<Container {...props} />);
    expect(container.find(RadioPlayer).length).toEqual(0);
  });

  it("should render Radion Player Control", () => {
    props.isSelected = true;
    container = shallow(<Container {...props} />);
    expect(container.find(RadioPlayer).length).toEqual(1);
  });

});
