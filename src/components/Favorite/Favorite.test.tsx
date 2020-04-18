import React from "react";
import { shallow, render } from "enzyme";
import renderer from "react-test-renderer";
import Favorite from "./Favorite";
import EmptyFavorite from "./EmptyFavorite";
import { ThemeContext } from "../ThemeContext";
import { BrowserRouter } from "react-router-dom";

const context = {
    isOpen: false,
    isFavorite: () => false,
    favorites: [
        {
            "id": 42,
            "title": "Osiedle Babina, ul. Babina 20/3A",
            "image": "http://localhost:8888/estate/wp-content/uploads/2020/01/image-1.jpg",
            "price": "125,500zł",
            "category": "Sprzedaż",
            "date": "24 Czer, 2019",
            "tags": ["Liczba pokoi 3", "76m2", "Liczba pięter 1"]
        }
    ]
}

const context2 = {
    isOpen: false,
    isFavorite: () => false,
    favorites: []
}

describe("<Favorite />", () => {
    it("renders component correctly when selected", () => {
        const tree = renderer.create(
            <ThemeContext.Provider value={context}>
                <BrowserRouter>
                    <Favorite />
                </BrowserRouter>
            </ThemeContext.Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders component correctly when empty", () => {
        const tree = renderer.create(
            <ThemeContext.Provider value={context2}>
                <BrowserRouter>
                    <Favorite />
                </BrowserRouter>
            </ThemeContext.Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("shows correctly favorite item in modal", () => {
        const wrapper = render(
            <ThemeContext.Provider value={context}>
                <BrowserRouter>
                    <Favorite />
                </BrowserRouter>
            </ThemeContext.Provider>
        );
        expect(wrapper.find(".offer__title").html()).toContain("Osiedle Babina, ul. Babina 20/3A");
        expect(wrapper.find(".offer__media > img").prop("src")).toContain("http://localhost:8888/estate/wp-content/uploads/2020/01/image-1.jpg");
    });

    it("shows information when empty favorites", () => {
        const wrapper = render(
            <ThemeContext.Provider value={context2}>
                <BrowserRouter>
                    <Favorite />
                </BrowserRouter>
            </ThemeContext.Provider>
        );
        expect(wrapper.find(".favorite__empty").html()).toContain("Aktualnie nie masz");
    });
});
