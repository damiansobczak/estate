import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Assets from "./Assets";

const assets = {
  "lazienka": "Prysznic, pralka",
  "pokoje": "2, TV, stół, sofa",
  "kuchnia": "Kuchenka, czajnik",
  "balkon": "6m2, zastawa",
  "parking": "Miejsce, szlaban",
  "metraz": "26m2, taras"
};

const assetsEmpty = { "lazienka": " ", };

const assetsEmpty2 = { "lazienka": "", };

describe("<Assets />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Assets assets={assets} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders props correctly", () => {
    const wrapper = shallow(<Assets assets={assets} />);
    expect(wrapper.find(".assets__item").length).toEqual(6);
  });

  it("renders props correctly 2", () => {
    const wrapper = shallow(<Assets assets={assets} />);
    const arr = wrapper.find(".assets__item");
    const arr2 = arr.forEach(el => el.text());
    expect(arr2.contains("Balkon")).toBeTruthy();
  });

  it("renders - when object property not provided with space", () => {
    const wrapper = shallow(<Assets assets={assetsEmpty} />);
    expect(
      wrapper
        .find(".assets__desc")
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
    const wrapper = shallow(<Assets />);
    expect(wrapper.find(".assets__title").text()).toEqual("Przepraszamy, brak danych.");
  });
});
