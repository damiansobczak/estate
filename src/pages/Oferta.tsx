import React, { Component } from "react";
import Header from "../components/Header/Header";
import { menuAPI } from "../helpers";
import Menu from "../components/Menu/Menu";
import Logo from "../assets/logo.svg";
import Slider from "../components/Slider/Slider";
import SliderImage from "../assets/slider-2.jpg";
import Footer from "../components/Footer/Footer";
import Assets from "../components/Assets/Assets";
import OfferJumbo from "../components/OfferJumbo/OfferJumbo";
import Fees from "../components/Fees/Fees";
import axios from "axios";
import Features from "../components/Features/Features";
import Gallery from "../components/Gallery/Gallery";

class Oferta extends React.Component<any, any> {
    state = {
        title: "Nieruchomość",
        subtitle: "Przestronne mieszkanie, atrakcyjna lokalizacja",
        text: "Maecenas in turpis diam. Sed eget metus at urna mattis vehicula. Duis iaculis ligula a enim vestibulum lacinia. Sed eget metus at urna mattis vehicula. Duis iaculis ligula a enim.",
        cords: {
            x: 51.752549,
            y: 18.056496
        },
        alt: "Nieruchomość",
        address: "Ostrów Wielkopolski, Panorama ul. Jasna 32/7",
        rent: "450",
        media: "230",
        deposit: "2000",
        price: "345,000",
        assets: {},
        background: null,
        gallery: {}
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        const estate = await axios.get(`${process.env.REACT_APP_API_URL}/nieruchomosci/${this.props.match.params.id}`).then(res => res.data);
        this.setState({
            id: estate.id,
            title: estate.title.rendered,
            text: estate.content.rendered,
            cords: {
                x: estate.acf.wspolrzedne && estate.acf.wspolrzedne.lat,
                y: estate.acf.wspolrzedne && estate.acf.wspolrzedne.lng
            },
            alt: estate.title.rendered,
            address: `${estate.title.rendered}, ${estate.acf.ulica}`,
            rent: estate.acf.czynsz,
            media: estate.acf.media,
            deposit: estate.acf.kaucja,
            price: estate.acf.cena,
            category: estate.categories[0] === 2 ? "Wynajem" : "Sprzedaż",
            tags: [`Liczba pokoi ${estate.acf.liczba_pokoi}`, `${estate.acf.metraz}`, `Liczba pięter ${estate.acf.liczba_pieter}`],
            assets: estate.acf.atrybuty,
            image: estate.better_featured_image.source_url,
            background: estate.acf.tlo && estate.acf.tlo.url,
            gallery: estate.acf.galeria
        });
    }

    render() {
        return (
            <>
                <Header height="500px">
                    <Menu pages={menuAPI} logo={Logo} />
                    <Slider
                        title={this.state.title}
                        image={this.state.background ? this.state.background : SliderImage}
                        alt="To jest alt do slider 1"
                    />
                </Header>
                <OfferJumbo details={this.state} />
                <Assets assets={this.state.assets} />
                <Fees media={this.state.media} rent={this.state.rent} deposit={this.state.deposit} price={this.state.price} />
                {this.state.gallery && (
                    <>
                        <Gallery images={this.state.gallery} />
                        <Features />
                    </>
                )}
                <Footer />
            </>
        );
    }
}

export default Oferta;
