import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactTestRenderer  from "react-test-renderer";
import Header from "./index";

configure({ adapter: new Adapter() });

describe("Header Component", () => {
  let renderer : any;

  beforeEach(() => {
    renderer =  ReactTestRenderer.create(
      <Header>
				<Header.Title title="Stations" />
				<Header.LogoutButton logout={()=>{}} />
				<Header.BackButton goBack={()=>{}} />
			</Header>
    );
  });

  it("should render Title Component with title STATION", () => {
    expect(renderer.root.findByProps({className: "title"}).children).toEqual(["Stations".toUpperCase()]);
  });

  it("should render Back button", () => {
    expect(renderer.root.findByProps({className: "backButton"}).props.entity).toBe("back-button");
  });
  
  it("should render Logout button", () => {
    expect(renderer.root.findByProps({className: "logoutButton"}).props.entity).toBe("logout-button");
  });

});