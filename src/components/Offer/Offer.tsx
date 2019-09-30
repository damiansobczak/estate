import React from "react";
import "./Offer.scss";
import { OfferProps } from "./Interfaces/OfferProps";

class Offer extends React.Component<OfferProps, any> {
  render() {
    return (
      <div className="column is-6-tablet is-4-desktop">
        <div className="offer">
          <div className="offer__media">
            <img src={this.props.image} alt="" />
            <div className="offer__favorite" />
            <div className="offer__price">{this.props.price}</div>
          </div>
          <div className="offer__content">
            <div className="offer__meta">
              <div className="offer__category">{this.props.category}</div>
              <div className="offer__date">{this.props.date}</div>
            </div>
            <div className="offer__title">{this.props.title}</div>
            <div className="offer__sep" />
            <div className="offer__tags">{this.props.tags.map((tag: string) => `${tag}, `)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Offer;
