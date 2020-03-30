import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Faq from "./Faq";
import FaqItem from "../FaqItem/FaqItem";

const data = [
    {
        id: 0,
        title: {
            rendered: "To jest Faq 1"
        },
        content: {
            rendered: "<p>Nasze biuro nieruchomości pobiera zadatek w kwocie nieprzekraczającej 2% od całkowitej wartości nieruchomości.</p>"
        }
    },
    {
        id: 1,
        title: {
            rendered: "To jest Faq 2"
        },
        content: {
            rendered: "<p>Nasze biuro nieruchomości pobiera zadatek w kwocie nieprzekraczającej 2% od całkowitej wartości nieruchomości.</p>"
        }
    },
    {
        id: 2,
        title: {
            rendered: "To jest Faq 3"
        },
        content: {
            rendered: "<p>Nasze biuro nieruchomości pobiera zadatek w kwocie nieprzekraczającej 2% od całkowitej wartości nieruchomości.</p>"
        }
    },
]

describe("<Faq />", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<Faq data={data} />).toJSON;
        expect(tree).toMatchSnapshot();
    });

    it("renders item correctly", () => {
        const wrapper = shallow(<Faq data={data} />);
        expect(wrapper.find('FaqItem').length).toEqual(3);
    });

    it("shows faq without html tag", () => {
        const wrapper = shallow(<Faq data={data} />);
        expect(wrapper.find('FaqItem').first().html()).not.toContain('<p>');
    });
});
