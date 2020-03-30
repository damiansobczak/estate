import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Offer from "./Offer";
import { BrowserRouter as Router } from 'react-router-dom';


describe("<Offer />", () => {
    it("renders component correctly", () => {
        const tree = renderer.create(<Router><Offer id={1} image="" price="145,000zł" category="Wynajem" date="01 Czer, 2020" title="Ostrów Wielkopolski" tags={["2 pokoje", "Łazienka", "Parking"]} /></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("displays image when empty props", () => {
        const wrapper = shallow(<Router><Offer id={1} image="" price="145,000zł" category="Wynajem" date="01 Czer, 2020" title="Ostrów Wielkopolski" tags={["2 pokoje", "Łazienka", "Parking"]} /></Router>);
        expect(wrapper.html()).toContain('<img src="image-1.jpg"');
    });

    it("displays tags in correct way", () => {
        const wrapper = shallow(<Router><Offer id={1} image="" price="145,000zł" category="Wynajem" date="01 Czer, 2020" title="Ostrów Wielkopolski" tags={["2 pokoje", "Łazienka", "Parking"]} /></Router>);
        expect(wrapper.html()).toContain('2 pokoje, Łazienka, Parking');
    });
});
