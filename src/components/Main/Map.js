
import styles from "../../styles/map.module.css";
import blogData from "../../blogData.json";
import postCover from "../../images/postCover.webp";
import defaultIcon from "../../images/face-40.png";
import dateLogo from "../../images/calendar-24.png";
import placeLogo from "../../images/bed-20.png";
import likenessLogo from "../../images/stars-24.png";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import React from "react";




const PopupContent = ({ content }) => (
  <p dangerouslySetInnerHTML={{ __html: content }} />
);

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Map = () => {
  const center = [48.825, 19.391];
  const zoom = 6;
  const data = blogData.posts;
   
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      maxZoom="18"
      scrollWheelZoom={false}
      position="topright"
      // zoomControl={false}
      className={styles.mapContainer}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((marker) =>
        marker.position && marker.position.length === 2 ? (
          <Marker
            key={marker.id}
            position={marker.position}
            icon={L.icon({
              iconUrl:
                process.env.PUBLIC_URL + marker.mapIconPath || defaultIcon,
              iconSize: [36, 36],
              iconAnchor: [18, 36],
              popupAnchor: [0, -36],
            })}
          >
            <Popup>
              <section className={styles.popUpBox}>
                <img
                  src={process.env.PUBLIC_URL + marker.imagePath || postCover}
                  alt="post cover"
                  className={styles.postCoverImage}
                />
                <article>
                  <aside className={styles.popUpMain}>
                    <PopupContent content={marker.title} />
                    <PopupContent content={marker.place} />
                  </aside>
                  <aside className={styles.popUpInfo}>
                    <div className={styles.postUnitInfoSection}>
                      <img src={dateLogo} alt="logo kalendaru pre datum kedy" />
                      <div className={styles.sectionWhen}>
                          <p>When</p>
                          <PopupContent content={formatDate(marker.date)} />
                      </div>
                    </div>
                    <div className={styles.postUnitInfoSection}>
                      <img src={likenessLogo} alt="logo pre hodnotenie miesta" /> 
                      <div className={styles.sectionHow}>
                          <p>How</p>
                          <PopupContent content={marker.how} />
                      </div>
                    </div>
                    <div className={styles.postUnitInfoSection}>
                      <img src={placeLogo} alt="logo pre sposob spania"/>
                      <div className={styles.sectionIn}>
                          <p>In</p>
                          <PopupContent content={marker.in} />
                      </div>
                    </div>
                  </aside>
                </article>
              </section>
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
};

export default Map;
