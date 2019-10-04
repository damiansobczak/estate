import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Assets from "./Assets";

const assets = [
  { id: 1, name: "Łazienka", desc: "Prysznic, pralka" },
  { id: 2, name: "Pokoje", desc: "2, TV, stół, sofa" },
  { id: 3, name: "Kuchnia", desc: "Kuchenka, czajnik" },
  { id: 4, name: "Taras", desc: "6m2, zastawa" },
  { id: 5, name: "Parking", desc: "Miejsce, szlaban" },
  { id: 6, name: "Metraż", desc: "26m2, taras" }
];

const assetsEmpty = [{ id: 1, name: " ", desc: "Prysznic, pralka" }];

const assetsEmpty2 = [{ id: 1, name: "", desc: "Prysznic, pralka" }];

describe("<Assets />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Assets assets={assets} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders props correctly", () => {
    const wrapper = shallow(<Assets assets={assets} />);
    expect(wrapper.find(".assets__item").length).toEqual(6);
  });

  it("renders props correctly", () => {
    const wrapper = shallow(<Assets assets={assets} />);
    const arr = wrapper.find(".assets__item");
    const arr2 = arr.forEach(el => el.text());
    expect(arr2.contains("Łazienka")).toBeTruthy();
  });

  it("renders - when object property not provided with space", () => {
    const wrapper = shallow(<Assets assets={assetsEmpty} />);
    expect(
      wrapper
        .find(".assets__item")
        .text()
        .split("")
        .includes("-")
    ).toBeTruthy();
  });

  it("renders - when object property not provided", () => {
    const wrapper = shallow(<Assets assets={assetsEmpty2} />);
    expect(
      wrapper
        .find(".assets__item")
        .text()
        .split("")
        .includes("-")
    ).toBeTruthy();
  });

  it("renders error when assets empty", () => {
    const wrapper = shallow(<Assets assets={[]} />);
    expect(wrapper.find(".assets__title").text()).toEqual("Przepraszamy, brak danych.");
  });
});
