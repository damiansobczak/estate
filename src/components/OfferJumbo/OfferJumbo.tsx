import React from "react";
import "./OfferJumbo.scss";
import { OfferJumboProps } from "./Interfaces/OfferJumboProps";
import Description from "../Description/Description";

class OfferJumbo extends React.Component<OfferJumboProps> {
  render() {
    return (
      <section className="offerJumbo">
        <div className="container offerJumbo__container">
          <div className="columns">
            <div className="column is-6-tablet">
              <Description subtitle={this.props.details.subtitle} title={this.props.details.title} text={this.props.details.text} />
            </div>
            <div className="column is-6-tablet">Google Maps</div>
          </div>
        </div>
      </section>
    );
  }
}

export default OfferJumbo;
