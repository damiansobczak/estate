import React, { Component } from "react";
import Header from "../components/Header/Header";
import { menuAPI } from "../helpers";
import Menu from "../components/Menu/Menu";
import Logo from "../assets/logo.svg";
import Slider from "../components/Slider/Slider";
import SliderImage from "../assets/slider-2.jpg";
import Footer from "../components/Footer/Footer";
import FeatureOffer from "../components/FeatureOffer/FeatureOffer";
import { getPromoRent } from "../API";

class Sprzedaz extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      rent: null
    };
  }

  componentDidMount() {
    const rent = getPromoRent().then(res => this.setState({ rent: res }));
  }

  render() {
    return (
      <>
        <Header height="500px">
          <Menu pages={menuAPI} logo={Logo} />
          <Slider
            title="Oferty wynajmu"
            image={SliderImage}
            alt="To jest alt do slider 1"
          />
        </Header>
        <FeatureOffer
          title="Oferty wynajmu nieruchomości"
          placeholder="Wynajem"
          count="10"
          category="Wynajem"
          show={3}
          data={this.state.rent}
        />
        <Footer />
      </>
    );
  }
}

export default Sprzedaz;
