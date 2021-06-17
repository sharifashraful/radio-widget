import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactTestRenderer  from "react-test-renderer";
import Container from "./index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  radio: {
    stationList: [{
      stationName: "Test",
      stationId: "1",
      frequency: 1111
    },{
      stationName: "Another test station",
      stationId: "2",
      frequency: 2222
    }]
  }
});

configure({ adapter: new Adapter() });

describe("Radio Station List", () => {
  let renderer : any;

  beforeEach(() => {
    renderer =  ReactTestRenderer.create(
      <Provider store={store}>
        <Container />
      </Provider>
    );
  });

  it("should render two Radio Stations", () => {
    expect(renderer.root.findByProps({className: "container"}).children.length).toEqual(2);
  });

});