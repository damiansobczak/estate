import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Fees from "./Fees";

describe("<Fees />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Fees media="230" rent="450" deposit="2000" price="345,600" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders media props", () => {
    const wrapper = shallow(<Fees media="230" rent="" deposit="" price="" />);
    expect(wrapper.find(".fees__media").text()).toContain("230 PLN");
  });

  it("renders rent props", () => {
    const wrapper = shallow(<Fees media="" rent="450" deposit="" price="" />);
    expect(wrapper.find(".fees__rent").text()).toContain("450 PLN");
  });

  it("renders deposit props", () => {
    const wrapper = shallow(<Fees media="" rent="" deposit="111" price="" />);
    expect(wrapper.find(".fees__deposit").text()).toContain("111 PLN");
  });

  it("renders deposit props", () => {
    const wrapper = shallow(<Fees media="" rent="" deposit="" price="9999" />);
    expect(wrapper.find(".fees__price").text()).toContain("9999 PLN");
  });
});
