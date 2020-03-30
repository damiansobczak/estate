import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import FaqItem from "./FaqItem";

describe("<FaqItem.test />", () => {
    it("renders component correctly", () => {
        const tree = renderer.create(<FaqItem count="01" title="To jest faq 1" desc="To jest desc dla Faq 01" />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("displays title correctly", () => {
        const wrapper = shallow(<FaqItem count="01" title="To jest faq 1" desc="To jest desc dla Faq 01" />);
        expect(wrapper.find(".faqitem__count").html()).toContain("01.");
    });

    it("displays title correctly", () => {
        const wrapper = shallow(<FaqItem count="01" title="To jest faq 1" desc="To jest desc dla Faq 01" />);
        expect(wrapper.find(".faqitem__title").html()).toContain("To jest faq 1");
    });

    it("displays description correctly", () => {
        const wrapper = shallow(<FaqItem count="01" title="To jest faq 1" desc="To jest desc dla Faq 01" />);
        expect(wrapper.find(".faqitem__desc").html()).toContain("To jest desc dla Faq 01");
    });
});
