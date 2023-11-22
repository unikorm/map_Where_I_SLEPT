
import styles from "../styles/mapInBlogPost.module.css";
import defaultIcon from "../images/face-40.png"

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from "leaflet";

import React from "react";



const MapInBlogPost = ({ data }) => {
    const center = data.position;
    const zoom = 14;

    return (
        <MapContainer center={center} zoom={zoom} maxZoom="18" scrollWheelZoom={true} className={styles.mapInBlogContainer}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
                key={data.id}
                position={data.position}
                icon={L.icon({
                    iconUrl: defaultIcon,
                    iconSize: [40, 40],
                    iconAnchor: [20, 40],
                    popupAnchor: [0, -40],
                })}
            >
            </Marker>
        </MapContainer>
    );
};

export default MapInBlogPost;