import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Faq from "../components/Faq/Faq";
import FeatureOffer from "../components/FeatureOffer/FeatureOffer";
import Jumbo from "../components/Jumbo/Jumbo";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Jumbo />
        <FeatureOffer title="Oferty najmu nieruchomości" placeholder="Wynajem" count="06" />
        <Faq />
        <Footer />
      </>
    );
  }
}

export default Home;
