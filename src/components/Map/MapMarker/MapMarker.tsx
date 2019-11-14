import React from "react";
import "./MapMarker.scss";
import { MapMarkerProps } from "./Interfaces/MapMarkerProps";

class MapMarker extends React.Component<MapMarkerProps> {
  render() {
    return <div className="mapMarker"></div>;
  }
}

export default MapMarker;
