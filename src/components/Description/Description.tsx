import React, { MouseEvent } from "react";
import "./Description.scss";
import { DescriptionProps } from "./Interfaces/DescriptionProps";

class Description extends React.Component<DescriptionProps> {
  addToFavorite = (event: MouseEvent, id: any) => {
    event.preventDefault();
    if (!localStorage.getItem(id)) {
      localStorage.setItem(id, JSON.stringify(id));
    }
  }
  render() {
    return (
      <div className="description">
        <div className="description__subtitle">{this.props.subtitle}</div>
        <h2 className="description__title">{this.props.title}</h2>
        <button className="description__favorite" onClick={(event) => this.addToFavorite(event, this.props.id)}>
          <span className="icon-heart"></span> Dodaj do ulubionych
        </button>
        <div className="description__text">{this.props.text.replace(/<br\>|<p>|<\/p>|/g, '')}</div>
      </div>
    );
  }
}

export default Description;
