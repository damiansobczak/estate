import React from "react";
import "./Map.scss";
import { MapProps } from "./Interfaces/MapProps";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker/MapMarker";

class Map extends React.Component<MapProps> {
  render() {
    return (
      <div className="map">
        <div
          className="map__canvas"
          style={{ height: "calc(100% + 105px)", width: "calc(100% + 75px)" }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyD3f_oy3CtnBeEM6wGBeBGhW7Frpd9pgzw"
            }}
            defaultCenter={{
              lat: this.props.cords.x,
              lng: this.props.cords.y
            }}
            defaultZoom={11}
          >
            <MapMarker lat={this.props.cords.x} lng={this.props.cords.y} />
          </GoogleMapReact>
        </div>
        <div className="map__info">
          <div className="map__subtitle">Lokalizacja</div>
          <div className="map__address">{this.props.address}</div>
        </div>
      </div>
    );
  }
}

export default Map;
