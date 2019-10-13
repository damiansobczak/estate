import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Gallery from "./Gallery";
import { galleryAPI } from "../../helpers";

describe("<Gallery />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Gallery images={galleryAPI} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders props correctly", () => {
    const wrapper = shallow(<Gallery images={galleryAPI} />);
    const images = wrapper.find(".gallery__item img");
    const imagesArr = images.map(el => el.props().src);
    expect(imagesArr.includes("galeria-1.png")).toBeTruthy();
  });
});
