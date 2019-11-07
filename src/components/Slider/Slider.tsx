import React from "react";
import "./Slider.scss";
import { SliderProps } from "./Interfaces/SliderProps";

class Slider extends React.Component<SliderProps> {
  render() {
    return (
      <div className="slider">
        <div className="slider__item slider__item--active">
          <h1 className="slider__title">{this.props.title}</h1>
          <img className="slider__image" src={this.props.image} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Slider;
