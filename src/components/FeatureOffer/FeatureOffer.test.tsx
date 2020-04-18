import React from "react";
import { render } from "enzyme";
import renderer from "react-test-renderer";
import FeatureOffer from "./FeatureOffer";
import { BrowserRouter } from "react-router-dom";

const data = {
    "title": "Oferty najmu nieruchomości",
    "placeholder": "Wynajem",
    "category": "Wynajem",
    "show": 3,
    "data": [
        {
            "id": 45,
            "slug": "osiedle-bialy-las",
            "link": "http://localhost:8888/estate/nieruchomosc/osiedle-bialy-las/",
            "title": {
                "rendered": "Osiedle Biały Las"
            },
            "content": {
                "rendered": "\n<p>Przedstawiamy najnowszą ofertę biura nieruchomości. Inwestycja usytuowana w ustronnym zaciszu, z dala od miejskiego zgiełku. Poniżej znajdą Państwo wszelkie niezbędne informacje odnośnie oferty w tym: miejsce usytuowania, dodatkowe wyposażenie oraz całkowite koszty mieszkalne.<br></p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>Przedstawiamy najnowszą ofertę biura nieruchomości. Inwestycja usytuowana w ustronnym zaciszu, z dala od miejskiego zgiełku. Poniżej znajdą Państwo wszelkie niezbędne informacje odnośnie oferty w tym: miejsce usytuowania, dodatkowe wyposażenie oraz całkowite koszty mieszkalne.</p>\n",
                "protected": false
            },
            "featured_media": 79,
            "categories": [
                2
            ],
            "better_featured_image": {
                "id": 79,
                "source_url": "http://localhost:8888/estate/wp-content/uploads/2020/01/image-5.jpg"
            },
            "acf": {
                "ulica": "ul. Leśna 2",
                "metraz": "120m2",
                "liczba_pokoi": "5",
                "cena": "345,700zł",
                "typ_domu": "Dom jednorodzinny",
                "liczba_pieter": "2",
                "miejsce_parkingowe": "2",
                "powierzchnia_dzialki": "35m2",
                "promocja": true,
                "wspolrzedne": {
                    "lat": "51.748378",
                    "lng": "19.464890"
                },
                "kaucja": "2000",
                "media": "230",
                "czynsz": "450",
                "atrybuty": {
                    "lazienka": "Prysznic, pralka",
                    "pokoje": "2, TV, stół, sofa",
                    "kuchnia": "Kuchenka, czajnik",
                    "balkon": "6m2, zastawa",
                    "parking": "Miejsce, szlaban",
                    "metraz": "26m2, taras"
                },
                "tlo": false,
                "galeria": {
                    "obraz_galerii_1": "http://localhost:8888/estate/wp-content/uploads/2020/01/image-6.jpg",
                    "obraz_galerii_2": "http://localhost:8888/estate/wp-content/uploads/2020/01/image-7.jpg",
                    "obraz_galerii_3": "http://localhost:8888/estate/wp-content/uploads/2020/01/image-3.jpg",
                    "obraz_galerii_4": "http://localhost:8888/estate/wp-content/uploads/2020/01/image-2.jpg"
                }
            }
        }
    ]
}

describe("<FeatureOffer />", () => {
    it("renders component correctly", () => {
        const tree = renderer.create(
            <BrowserRouter>
                <FeatureOffer
                    title="Oferty sprzedaży nieruchomości"
                    placeholder="Sprzedaż"
                    category="Sprzedaż"
                    show={3}
                    data={data.data} />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("show total offers numer", () => {
        const wrapper = render(
            <BrowserRouter>
                <FeatureOffer
                    title="Oferty sprzedaży nieruchomości"
                    placeholder="Sprzedaż"
                    category="Sprzedaż"
                    show={3}
                    data={data.data} />
            </BrowserRouter>
        );
        expect(wrapper.find(".featureOffer__counter__digit").html()).toContain("1");
    });

    it("display offer correctly", () => {
        const wrapper = render(
            <BrowserRouter>
                <FeatureOffer
                    title="Oferty sprzedaży nieruchomości"
                    placeholder="Sprzedaż"
                    category="Sprzedaż"
                    show={3}
                    data={data.data} />
            </BrowserRouter>
        );
        expect(wrapper.find(".offer__media > img").prop("src")).toContain("http://localhost:8888/estate/wp-content/uploads/2020/01/image-5.jpg");
        expect(wrapper.find(".offer__title").html()).toContain("Osiedle Bia&#x142;y Las, ul. Le&#x15B;na 2");
    });

    it("display props correctly", () => {
        const wrapper = render(
            <BrowserRouter>
                <FeatureOffer
                    title="Oferty sprzedaży nieruchomości"
                    placeholder="Sprzedaż"
                    category="Sprzedaż"
                    show={3}
                    data={data.data} />
            </BrowserRouter>
        );
        expect(wrapper.find(".featureOffer__title").html()).toContain("Oferty sprzeda&#x17C;y nieruchomo&#x15B;ci");
    });
});
