import React from "react";
import "./FeaturesItem.scss";
import { FeatureItemProps } from "./Interfaces/FeatureItemProps";

class FeaturesItem extends React.Component<FeatureItemProps> {
  render() {
    return (
      <div className="featuresItem column">
        <div className="featuresItem__icon" data-number={this.props.number}>
          <span className={`icon-${this.props.icon}`}></span>
        </div>
        <div className="featuresItem__title">{this.props.title}</div>
      </div>
    );
  }
}

export default FeaturesItem;
