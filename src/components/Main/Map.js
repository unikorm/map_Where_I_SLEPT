
import styles from "../../styles/map.module.css";
import { markers } from "../../positions.js";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const PopupContent = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
);




const Map = () => {
    const center = [48.825, 19.391]; // Change to your desired center coordinates
    const zoom = 6 // Adjust the zoom level

    return (
        <MapContainer center={center} zoom={zoom} maxZoom="15" scrollWheelZoom={false} className={styles.mapContainer}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, index) => (
                <Marker key={index} position={marker.position}>
                    <Popup>
                        <PopupContent content={marker.text}/>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;