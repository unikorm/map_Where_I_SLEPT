
import "../../App.css";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
    const center = [48.825, 19.391]; // Change to your desired center coordinates
    const zoom = 7 // Adjust the zoom level
    const markers = [
        { position: [49.825, 17.391], text: "Marker 1" },
        { position: [50.825, 21.391], text: "Marker 2" }
        ];

    return (
        <MapContainer center={center} zoom={zoom} className="mapContainer">
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, index) => (
                <Marker key={index} position={marker.position}>
                    <Popup>{marker.text}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;