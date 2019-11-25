import React, { Component } from "react";
import Header from "../components/Header/Header";
import { menuAPI } from "../helpers";
import Menu from "../components/Menu/Menu";
import Logo from "../assets/logo.png";
import FilterSearch from "../components/FilterSearch/FilterSearch";
import Slider from "../components/Slider/Slider";
import SliderImage from "../assets/slider.jpg";
import Footer from "../components/Footer/Footer";
import Faq from "../components/Faq/Faq";
import FeatureOffer from "../components/FeatureOffer/FeatureOffer";
import Jumbo from "../components/Jumbo/Jumbo";

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
          <Slider
            title="Znajdź mieszkanie szyte na miarę"
            image={SliderImage}
            alt="To jest alt do slider 1"
          />
          <FilterSearch />
        </Header>
        <FeatureOffer
          title="Oferty sprzedaży nieruchomości"
          placeholder="Sprzedaż"
          count="10"
          category="Sprzedaż"
        />
        <Jumbo />
        <FeatureOffer
          title="Oferty najmu nieruchomości"
          placeholder="Wynajem"
          count="06"
          category="Wynajem"
        />
        <Faq />
        <Footer />
      </>
    );
  }
}

export default Home;
