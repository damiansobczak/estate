import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import FeaturesItem from "./FeaturesItem";
import Features from "../Features/Features";

describe("<FeaturesItem />", () => {
    it("renders component correctly", () => {
        const tree = renderer.create(<FeaturesItem number="1" icon="key" title="Najniższe ceny w mieście" />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("renders number prop correctly", () => {
        const wrapper = shallow(<FeaturesItem number="1" icon="key" title="Najniższe ceny w mieście" />);
        expect(wrapper.find(".featuresItem__icon").prop("data-number")).toContain("1");
    });

    it("renders icon name correctly", () => {
        const wrapper = shallow(<FeaturesItem number="1" icon="key" title="Najniższe ceny w mieście" />);
        expect(wrapper.find(".featuresItem__icon > span").prop("className")).toContain("icon-key");
    });

    it("renders title correctly", () => {
        const wrapper = shallow(<FeaturesItem number="1" icon="key" title="Najniższe ceny w mieście" />);
        expect(wrapper.find(".featuresItem__title").html()).toContain("Najniższe ceny w mieście");
    });
});
