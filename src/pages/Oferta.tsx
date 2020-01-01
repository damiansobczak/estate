import React, { Component } from "react";
import Header from "../components/Header/Header";
import { menuAPI } from "../helpers";
import Menu from "../components/Menu/Menu";
import Logo from "../assets/logo.png";
import Slider from "../components/Slider/Slider";
import SliderImage from "../assets/slider-2.png";
import Footer from "../components/Footer/Footer";
import Assets from "../components/Assets/Assets";
import { assetsAPI } from "../helpers";
import { offerJumboAPI } from "../helpers";
import OfferJumbo from "../components/OfferJumbo/OfferJumbo";
import Fees from "../components/Fees/Fees";

class Sprzedaz extends React.Component {
    render() {
        return (
            <>
                <Header height="500px">
                    <Menu pages={menuAPI} logo={Logo} />
                    <Slider
                        title="Nieruchomość"
                        image={SliderImage}
                        alt="To jest alt do slider 1"
                    />
                </Header>
                <OfferJumbo details={offerJumboAPI} />
                <Assets assets={assetsAPI} />
                <Fees media="230" rent="450" deposit="2000" price="345,600" />
                <Footer />
            </>
        );
    }
}

export default Sprzedaz;
