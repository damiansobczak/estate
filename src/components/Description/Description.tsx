import React from "react";
import "./Description.scss";
import { DescriptionProps } from "./Interfaces/DescriptionProps";

class Description extends React.Component<DescriptionProps> {
  render() {
    return (
      <div className="description">
        <div className="description__subtitle">{this.props.subtitle}</div>
        <h2 className="description__title">{this.props.title}</h2>
        <button className="description__favorite">
          <span className="icon-heart"></span> Dodaj do ulubionych
        </button>
        <div className="description__text">{this.props.text.replace(/<br\>|<p>|<\/p>|/g, '')}</div>
      </div>
    );
  }
}

export default Description;
