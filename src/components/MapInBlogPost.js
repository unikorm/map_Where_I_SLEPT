
import styles from "../styles/mapInBlogPost.module.css";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const PopupContent = ({ content }) => (
    <p dangerouslySetInnerHTML={{ __html: content }} />
);

const MapInBlogPost = ({ data }) => {
    const center = data.position;
    const zoom = 14;

    return (
        <MapContainer center={center} zoom={zoom} maxZoom="18" scrollWheelZoom={false} className={styles.mapInBlogContainer}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker key={data.id} position={data.position}>
                <Popup>
                    <section className={styles}>
                        <img src={data} alt="post image" className={styles}/>
                        <article>
                            <aside className={styles}>
                                <PopupContent content={data.title}/>
                                <PopupContent content={data.place}/>
                            </aside>
                            <aside className={styles}>
                                <PopupContent content={data.date}/>
                                <PopupContent content={data.how}/>
                                <PopupContent content={data.id}/>
                            </aside>
                        </article>
                    </section>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapInBlogPost;