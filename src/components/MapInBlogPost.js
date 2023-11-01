
import styles from "../styles/mapInBlogPost.module.css";
import defaultIcon from "../images/face-40.png"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";

import React from "react";



// const PopupContent = ({ content }) => (
//     <p dangerouslySetInnerHTML={{ __html: content }} />
// );

const MapInBlogPost = ({ data }) => {
    const center = data.position;
    const zoom = 14;
    // const imageUrl = process.env.PUBLIC_URL + data.imagePath;

    return (
        <MapContainer center={center} zoom={zoom} maxZoom="18" scrollWheelZoom={false} className={styles.mapInBlogContainer}>
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
                {/* <Popup>
                    <section className={styles.popUpBoxInPost}>
                        <img src={imageUrl} alt="post cover" className={styles.postCoverImageInPost}/>
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
                </Popup> */}
            </Marker>
        </MapContainer>
    );
};

export default MapInBlogPost;