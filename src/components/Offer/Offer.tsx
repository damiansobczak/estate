import React from "react";
import "./Offer.scss";
import { OfferProps } from "./Interfaces/OfferProps";
import { Link } from "react-router-dom";
import OfferImage from "../../assets/image-1.jpg";
import { ThemeContext } from "../ThemeContext";

class Offer extends React.Component<OfferProps, any> {
  render() {
    let details = {
      id: this.props.id,
      title: this.props.title,
      image: this.props.image || OfferImage,
      price: this.props.price,
      category: this.props.category,
      date: this.props.date,
      tags: this.props.tags
    };
    return (
      <ThemeContext.Consumer>
        {value => (
          <Link to={`/oferta/${this.props.id}`} className="column is-6-tablet is-4-desktop">
            <div className={`offer__favorite ${value.isFavorite(this.props.id) ? `offer__favorite--active` : ``}`} onClick={((event) => value.toggleFavorites && value.toggleFavorites(event, details))}>
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
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Offer;
