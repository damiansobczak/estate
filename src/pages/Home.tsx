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
import { getPromoRent, getPromoSale, getFaqs } from "../API";

class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      rent: null,
      sale: null,
      faqs: null
    };
  }

  async componentDidMount() {
    const rent = getPromoRent().then(res => this.setState({ rent: res }));
    const sale = getPromoSale().then(res => this.setState({ sale: res }));
    const faq = getFaqs().then(res => this.setState({ faqs: res.data }));
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
          show={3}
          data={this.state.sale}
        />
        <Jumbo />
        <FeatureOffer
          title="Oferty najmu nieruchomości"
          placeholder="Wynajem"
          count="06"
          category="Wynajem"
          show={3}
          data={this.state.rent}
        />
        <Faq data={this.state.faqs}/>
        <Footer />
      </>
    );
  }
}

export default Home;
