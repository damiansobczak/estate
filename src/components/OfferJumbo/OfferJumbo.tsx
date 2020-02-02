import React from "react";
import "./OfferJumbo.scss";
import { OfferJumboProps } from "./Interfaces/OfferJumboProps";
import Description from "../Description/Description";
// import Map from "../Map/Map";
import MapLeaflet from "../MapLeaflet/MapLeaflet";

class OfferJumbo extends React.Component<OfferJumboProps> {
  render() {
    return (
      <section className="offerJumbo">
        <div className="container offerJumbo__container">
          <div className="columns">
            <div className="column is-6-tablet">
              <Description
                details={this.props.details}
              />
            </div>
            <div className="column is-6-tablet">
              <MapLeaflet cords={this.props.details.cords} address={this.props.details.address} />
              {/* <Map
                cords={this.props.details.cords}
                address={this.props.details.address}
              /> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OfferJumbo;
