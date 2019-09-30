import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Faq from "../components/Faq/Faq";
import FeatureOffer from "../components/FeatureOffer/FeatureOffer";
import Jumbo from "../components/Jumbo/Jumbo";
import FilterSearch from "../components/FilterSearch/FilterSearch";
import Features from "../components/Features/Features";

class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <FilterSearch />
        <FeatureOffer title="Oferty sprzedaży nieruchomości" placeholder="Sprzedaż" count="10" />
        <Jumbo />
        <FeatureOffer title="Oferty najmu nieruchomości" placeholder="Wynajem" count="06" />
        <Faq />
        <Features />
        <Footer />
      </>
    );
  }
}

export default Home;
