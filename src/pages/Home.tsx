import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Faq from "../components/Faq/Faq";
import FeatureOffer from "../components/FeatureOffer/FeatureOffer";
import Jumbo from "../components/Jumbo/Jumbo";
import FilterSearch from "../components/FilterSearch/FilterSearch";
import Features from "../components/Features/Features";
import Fees from "../components/Fees/Fees";
import Assets from "../components/Assets/Assets";

class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const assets = [
      { id: 1, name: "Łazienka", desc: "Prysznic, pralka" },
      { id: 2, name: "Pokoje", desc: "2, TV, stół, sofa" },
      { id: 3, name: "Kuchnia", desc: "Kuchenka, czajnik" },
      { id: 4, name: "Taras", desc: "6m2, zastawa" },
      { id: 5, name: "Parking", desc: "Miejsce, szlaban" },
      { id: 6, name: "Metraż", desc: "26m2, taras" }
    ];
    return (
      <>
        <FilterSearch />
        <FeatureOffer title="Oferty sprzedaży nieruchomości" placeholder="Sprzedaż" count="10" />
        <Jumbo />
        <FeatureOffer title="Oferty najmu nieruchomości" placeholder="Wynajem" count="06" />
        <Faq />
        <Fees media="230" rent="450" deposit="2000" price="345,600" />
        <Assets assets={assets} />
        <Features />
        <Footer />
      </>
    );
  }
}

export default Home;
