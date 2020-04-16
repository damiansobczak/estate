import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Favorite from "./Favorite";
import EmptyFavorite from "./EmptyFavorite";
import { ThemeContext } from "../ThemeContext";

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
    favorites: null
}

describe("<Favorite />", () => {
    it("renders component correctly", () => {
        const tree = renderer.create(<ThemeContext.Provider value={context}><Favorite /></ThemeContext.Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
