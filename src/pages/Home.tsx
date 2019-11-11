import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Faq from "../components/Faq/Faq";
import FeatureOffer from "../components/FeatureOffer/FeatureOffer";
import Jumbo from "../components/Jumbo/Jumbo";
import FilterSearch from "../components/FilterSearch/FilterSearch";
import Features from "../components/Features/Features";
import Fees from "../components/Fees/Fees";
import Assets from "../components/Assets/Assets";
import Gallery from "../components/Gallery/Gallery";
import { galleryAPI } from "../helpers";
import { assetsAPI } from "../helpers";
import { menuAPI } from "../helpers";
import Slider from "../components/Slider/Slider";
import SliderImage from "../assets/slider.jpg";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Logo from "../assets/logo.png";

class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header>
          <Menu pages={menuAPI} logo={Logo} />
          <Slider title="Znajdź mieszkanie szyte na miarę" image={SliderImage} alt="To jest alt do slider 1" />
          <FilterSearch />
        </Header>
        <FeatureOffer title="Oferty sprzedaży nieruchomości" placeholder="Sprzedaż" count="10" />
        <Jumbo />
        <FeatureOffer title="Oferty najmu nieruchomości" placeholder="Wynajem" count="06" />
        <Faq />
        <Gallery images={galleryAPI} />
        <Fees media="230" rent="450" deposit="2000" price="345,600" />
        <Assets assets={assetsAPI} />
        <Features />
        <Footer />
      </>
    );
  }
}

export default Home;
