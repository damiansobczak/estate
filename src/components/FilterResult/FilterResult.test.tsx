import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import FilterResult from "./FilterResult";

const result = {
    isShowing: false,
    data: []
}

const result2 = {
    "isShowing": true,
    "data": [
        {
            "id": 42,
            "slug": "osiedle-babina",
            "link": "http://localhost:8888/estate/nieruchomosc/osiedle-babina/",
            "title": {
                "rendered": "Osiedle Babina"
            },
            "content": {
                "rendered": "\n<p>Przedstawiamy najnowszą ofertę biura nieruchomości. Inwestycja usytuowana w ustronnym zaciszu, z dala od miejskiego zgiełku. Poniżej znajdą Państwo wszelkie niezbędne informacje odnośnie oferty w tym: miejsce usytuowania, dodatkowe wyposażenie oraz całkowite koszty mieszkalne.</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>Przedstawiamy najnowszą ofertę biura nieruchomości. Inwestycja usytuowana w ustronnym zaciszu, z dala od miejskiego zgiełku. Poniżej znajdą Państwo wszelkie niezbędne informacje odnośnie oferty w tym: miejsce usytuowania, dodatkowe wyposażenie oraz całkowite koszty mieszkalne.</p>\n",
                "protected": false
            },
            "categories": [
                3
            ],
            "better_featured_image": {
                "id": 83,
                "media_details": {
                    "width": 1400,
                    "height": 933,
                    "file": "2020/01/image-1.jpg",
                },
                "source_url": "http://localhost:8888/estate/wp-content/uploads/2020/01/image-1.jpg"
            },
            "acf": {
                "ulica": "ul. Babina 20/3A",
                "metraz": "76m2",
                "liczba_pokoi": "3",
                "cena": "125,500zł",
                "typ_domu": "Kamienica",
                "liczba_pieter": "1",
                "miejsce_parkingowe": "1",
                "powierzchnia_dzialki": "100m2",
                "promocja": true,
                "wspolrzedne": {
                    "lat": "51.748378",
                    "lng": "19.464890"
                },
                "kaucja": "1500",
                "media": "300",
                "czynsz": "250",
                "atrybuty": {
                    "lazienka": "Prysznic, pralka",
                    "pokoje": "2, TV, stół, sofa",
                    "kuchnia": "Kuchenka, czajnik",
                    "balkon": "6m2, zastawa",
                    "parking": "Miejsce, szlaban",
                    "metraz": "26m2, taras"
                },
                "tlo": false
            }
        },
        {
            "id": 40,
            "slug": "osiedle-srebrne-laki",
            "link": "http://localhost:8888/estate/nieruchomosc/osiedle-srebrne-laki/",
            "title": {
                "rendered": "Osiedle Srebrne Łąki"
            },
            "content": {
                "rendered": "\n<p>Przedstawiamy najnowszą ofertę biura nieruchomości. Inwestycja usytuowana w ustronnym zaciszu, z dala od miejskiego zgiełku. Poniżej znajdą Państwo wszelkie niezbędne informacje odnośnie oferty w tym: miejsce usytuowania, dodatkowe wyposażenie oraz całkowite koszty mieszkalne.</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>Przedstawiamy najnowszą ofertę biura nieruchomości. Inwestycja usytuowana w ustronnym zaciszu, z dala od miejskiego zgiełku. Poniżej znajdą Państwo wszelkie niezbędne informacje odnośnie oferty w tym: miejsce usytuowania, dodatkowe wyposażenie oraz całkowite koszty mieszkalne.</p>\n",
                "protected": false
            },
            "categories": [
                3
            ],
            "better_featured_image": {
                "id": 82,
                "source_url": "http://localhost:8888/estate/wp-content/uploads/2020/01/image-2.jpg"
            },
            "acf": {
                "ulica": "ul. Srebrna",
                "metraz": "50m2",
                "liczba_pokoi": "4",
                "cena": "100,000zł",
                "typ_domu": "Dom jednorodzinny",
                "liczba_pieter": "2",
                "miejsce_parkingowe": "2",
                "powierzchnia_dzialki": "100m2",
                "promocja": true,
                "wspolrzedne": {
                    "lat": "51.748378",
                    "lng": "19.464890"
                },
                "kaucja": "2200",
                "media": "140",
                "czynsz": "230",
                "atrybuty": {
                    "lazienka": "Prysznic, pralka",
                    "pokoje": "2, TV, stół, sofa",
                    "kuchnia": "Kuchenka, czajnik",
                    "balkon": "6m2, zastawa",
                    "parking": "Miejsce, szlaban",
                    "metraz": "26m2, taras"
                },
                "tlo": false
            }
        }
    ]
}

describe("<FilterResult />", () => {
    it("renders component correctly", () => {
        const tree = renderer.create(<FilterResult {...result} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("shows info when no results", () => {
        const wrapper = shallow(<FilterResult {...result} />);
        expect(wrapper.find(".filterResult").prop("className")).not.toContain("filterResult--visible");
        expect(wrapper.find(".filterResult__title").html()).toContain("Brak ofert");
    });

    it("shows modal when available results", () => {
        const wrapper = shallow(<FilterResult {...result2} />);
        expect(wrapper.find(".filterResult").prop("className")).toContain("filterResult--visible");
    });

    it("shows multiple results", () => {
        const wrapper = shallow(<FilterResult {...result2} />);
        expect(wrapper.find(".filterResult__item").length).toEqual(2);
    });

    it("shows fields in item correctly", () => {
        const wrapper = shallow(<FilterResult {...result2} />);
        expect(wrapper.find(".filterResult__item").first().find(".filterResult__image").prop("src")).toContain("http://localhost:8888/estate/wp-content/uploads/2020/01/image-1.jpg");
        expect(wrapper.find(".filterResult__item").first().find(".filterResult__title").first().html()).toContain("Osiedle Babina");
        expect(wrapper.find(".filterResult__item").first().find(".filterResult__value").at(1).html()).toContain("125,500zł");
        expect(wrapper.find(".filterResult__item").first().find(".filterResult__value").at(2).html()).toContain("76m2");
        expect(wrapper.find(".filterResult__item").first().find(".filterResult__value").at(3).html()).toContain("3");
    });
});
