import React from "react";
import { FeatureOfferProps } from "./Interfaces/FeatureOfferProps";
import "./FeatureOffer.scss";
import Offer from "../Offer/Offer";
import Image from "../../assets/feature-offer.png";

class FeatureOffer extends React.Component<FeatureOfferProps> {
  render() {
    return (
      <section className="featureOffer" data-placeholder={this.props.placeholder}>
        <div className="container">
          <div className="featureOffer__counter">
            <div className="featureOffer__counter__digit">{this.props.count}</div>
            <div className="featureOffer__counter__text">Aktualnie w ofercie</div>
          </div>
          <div className="columns">
            <div className="column is-6-tablet">
              <div className="featureOffer__link">Zobacz więcej ofert</div>
              <h2 className="featureOffer__title">{this.props.title}</h2>
            </div>
            <div className="column is-6-tablet">
              <div className="featureOffer__contact">
                Potrzebujesz pomocy agenta? <span className="featureOffer__phone">+48 793 469 554</span>
              </div>
            </div>
          </div>
          <div className="columns">
            {this.props.data && this.props.data.slice(0, this.props.show).map((item: any) => <Offer id={item.id} image={Image} price={item.acf.cena} category={this.props.category} date="24 Czer, 2019" title={`${item.title.rendered}, ${item.acf.ulica}`} tags={[`Liczba pokoi ${item.acf.liczba_pokoi}`, `${item.acf.metraz}`, `Liczba pięter ${item.acf.liczba_pieter}`]} key={item.id}/>)}
          </div>
        </div>
      </section>
    );
  }
}

export default FeatureOffer;
