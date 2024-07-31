import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
import Counter from "./Counter";


describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<App />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
  
  it("Should render 3 after three increments", () => {
    const component = renderer.create(<Counter />);
    component.getInstance().increment();
    component.getInstance().increment();
    component.getInstance().increment();
    expect(component.toJSON()).toMatchSnapshot();
  })
});