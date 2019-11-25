import React, { Component } from "react";
import Header from "../components/Header/Header";
import { menuAPI } from "../helpers";
import Menu from "../components/Menu/Menu";
import Logo from "../assets/logo.png";
import Slider from "../components/Slider/Slider";
import SliderImage from "../assets/slider-2.png";
import Footer from "../components/Footer/Footer";
import FeatureOffer from "../components/FeatureOffer/FeatureOffer";

class Sprzedaz extends React.Component {
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
        />
        <Footer />
      </>
    );
  }
}

export default Sprzedaz;
