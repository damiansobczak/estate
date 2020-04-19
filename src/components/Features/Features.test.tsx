import React from "react";
import { render } from "enzyme";
import renderer from "react-test-renderer";
import Features from "./Features";

describe("<Features />", () => {
    it("renders component correctly", () => {
        const tree = renderer.create(<Features />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("displays title correctly", () => {
        const wrapper = render(<Features />);
        expect(wrapper.find(".features__title").html()).toContain("Ca&#x142;y czas zastanawiasz si&#x119; dlaczego powiniene&#x15B; wybra&#x107; nasze us&#x142;ugi?");
    });

    it("displays text correctly", () => {
        const wrapper = render(<Features />);
        expect(wrapper.find(".features__title").html()).toContain("Ca&#x142;y czas zastanawiasz si&#x119; dlaczego powiniene&#x15B; wybra&#x107; nasze us&#x142;ugi?");
    });

    it("displays correct number of items", () => {
        const wrapper = render(<Features />);
        expect(wrapper.find(".features__items").children().length).toEqual(5);
    });
});
