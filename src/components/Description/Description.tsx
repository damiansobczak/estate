import React, { MouseEvent } from "react";
import "./Description.scss";
import { DescriptionProps } from "./Interfaces/DescriptionProps";
import { ThemeContext } from "../ThemeContext";
import OfferImage from "../../assets/image-1.jpg";

class Description extends React.Component<DescriptionProps> {
  render() {
    let value = this.context;
    let details = {
      id: this.props.details.id,
      title: this.props.details.title,
      image: this.props.details.image || OfferImage,
      price: this.props.details.price,
      category: this.props.details.category,
      date: this.props.details.date || '24 CZERW, 2019',
      tags: this.props.details.tags
    };
    return (
      <ThemeContext.Consumer>
        {value => (
          <div className="description">
            <div className="description__subtitle">Sprawdź szczegóły tej oferty</div>
            <h2 className="description__title">{this.props.details.title}</h2>
            <button className={`description__favorite ${value.isFavorite(this.props.details.id) ? `description__favorite--active` : ``}`} onClick={(event: MouseEvent) => value.toggleFavorites && value.toggleFavorites(event, details)}>
              <span className="icon-heart"></span> Dodaj do ulubionych
          </button>
            <div className="description__text">{this.props.details.text.replace(/<br\>|<p>|<\/p>|/g, '')}</div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Description;
