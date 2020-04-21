import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import FilterSearch from "./FilterSearch";

describe("<FilterSearch />", () => {
    it("renders component correctly", () => {
        const tree = renderer.create(<FilterSearch />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("allow to search by name", () => {
        const wrapper = shallow(<FilterSearch />);
        let input = wrapper.find("input#filterSearch__name");
        input.simulate('change', { target: { value: 'Osiedle' } });
        expect(wrapper.find("input#filterSearch__name").props().value).toEqual("Osiedle");
    });

    it("allow to search by price", () => {
        const wrapper = shallow(<FilterSearch />);
        let input = wrapper.find("input#filterSearch__price");
        input.simulate('change', { target: { value: '200,000' } });
        expect(wrapper.find("input#filterSearch__price").props().value).toEqual("200,000");
    });

    it("allow to search by category", () => {
        const wrapper = shallow(<FilterSearch />);
        let input = wrapper.find("input#filterSearch__category");
        input.simulate('change', { target: { value: 'Wynajem' } });
        expect(wrapper.find("input#filterSearch__category").props().value).toEqual("Wynajem");
    });

    it("updates state on input change", () => {
        const wrapper = mount(<FilterSearch />);
        let name = wrapper.find("input#filterSearch__name");
        let price = wrapper.find("input#filterSearch__price");
        let category = wrapper.find("input#filterSearch__category");

        name.simulate('change', { target: { value: 'Osiedle' } });
        price.simulate('change', { target: { value: '999' } });
        category.simulate('change', { target: { value: 'Wynajem' } });

        expect(wrapper.state('text')).toEqual('Osiedle');
        expect(wrapper.state('price')).toEqual('999');
        expect(wrapper.state('category')).toEqual('Wynajem');
    });
});
