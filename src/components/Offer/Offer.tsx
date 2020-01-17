import React, { MouseEvent } from "react";
import "./Offer.scss";
import { OfferProps } from "./Interfaces/OfferProps";
import { Link } from "react-router-dom";
import OfferImage from "../../assets/nieruchomosc.jpg";

class Offer extends React.Component<OfferProps, any> {
  addToFavorite = (event: MouseEvent, details: any) => {
    event.preventDefault();
    const id = String(this.props.id);
    if (!localStorage.getItem(id)) {
      localStorage.setItem(id, JSON.stringify(details));
    }
  }
  render() {
    return (
      <Link to={`/oferta/${this.props.id}`} className="column is-6-tablet is-4-desktop">
        <div className="offer__favorite" onClick={(event) => this.addToFavorite(event, {
          id: this.props.id,
          title: this.props.title,
          image: this.props.image || OfferImage,
          price: this.props.price,
          category: this.props.category,
          date: this.props.date,
          tags: this.props.tags
        })}>
          <span className="icon-heart"></span>
        </div>
        <div className="offer">
          <div className="offer__media">
            <img src={this.props.image ? this.props.image : OfferImage} alt="" />
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
      </Link>
    );
  }
}

export default Offer;
