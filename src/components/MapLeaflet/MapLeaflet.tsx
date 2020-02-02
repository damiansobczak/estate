import React from "react";
import "./MapLeaflet.scss";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from "./leaflet-marker.png";

class MapLeaflet extends React.Component<any, any> {
    render() {
        const pointerIcon = new L.Icon({
            iconUrl: `${markerIcon}`,
            iconRetinaUrl: `${markerIcon}`,
            iconAnchor: [5, 55],
            popupAnchor: [10, -44],
            iconSize: [40, 40]
        })
        return (
            <div className="map">
                <Map center={[this.props.cords.x, this.props.cords.y]} zoom={13}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={[this.props.cords.x, this.props.cords.y]} icon={pointerIcon}>
                        Dupa
                    </Marker>

                    <div className="map__info">
                        <div className="map__subtitle">Lokalizacja</div>
                        <div className="map__address">{this.props.address}</div>
                    </div>
                </Map>
            </div>
        );
    }
}

export default MapLeaflet;
