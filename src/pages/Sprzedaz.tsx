import React, { Component } from "react";
import Header from "../components/Header/Header";
import { menuAPI } from "../helpers";
import Menu from "../components/Menu/Menu";
import Logo from "../assets/logo.svg";
import Slider from "../components/Slider/Slider";
import SliderImage from "../assets/slider-2.jpg";
import Footer from "../components/Footer/Footer";
import FeatureOffer from "../components/FeatureOffer/FeatureOffer";
import { getPromoSale } from "../API";

class Sprzedaz extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      sale: null
    };
  }

  componentDidMount() {
    const sale = getPromoSale().then(res => this.setState({ sale: res }));
  }

  render() {
    return (
      <>
        <Header height="500px">
          <Menu pages={menuAPI} logo={Logo} />
          <Slider
            title="Oferty sprzedaży"
            image={SliderImage}
            alt="To jest alt do slider 1"
          />
        </Header>
        <FeatureOffer
          title="Oferty sprzedaży nieruchomości"
          placeholder="Sprzedaż"
          count="10"
          category="Sprzedaż"
          show={3}
          data={this.state.sale}
        />
        <Footer />
      </>
    );
  }
}

export default Sprzedaz;
