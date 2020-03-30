import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Description from "./Description";

const details = {
    id: 24,
    title: "Osiedle Złote Łąki",
    text: "Przedstawiamy najnowszą ofertę biura nieruchomości.",
    cords: {
        x: "51.748378",
        y: "19.464890"
    },
    address: `Ostrów Wielkopolski, ul. Jasna 56`,
    rent: "1500",
    media: "600",
    deposit: "1500",
    price: "199.999PLN",
    category: "Sprzedaż",
    tags: [`Liczba pokoi 2`, `98m2`, `Liczba pięter 2`],
    assets: {
        lazienka: "Pysznic, pralka",
        pokoje: "3",
        kuchnia: "Kuchenka, czajnik",
        balkon: "15m2",
        parking: "",
        metraz: "55m2"
    },
    image: null,
    background: null,
    gallery: null
}

describe("<Description />", () => {
    it("renders component correctly", () => {
        const tree = renderer.create(<Description details={details} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("displays favorite button", () => {
        const wrapper = shallow(<Description details={details} />);
        expect(wrapper.html().search('Dodaj do ulubionych')).toBeTruthy();
    });
});