
import arrow from "../images/arrow-30.png";
import styles from "../styles/popUpInfo.module.css";

import React, { useState } from "react";

const PopUpInfo = ({ info }) => {
const [isContentVisible, setIsContentVisible] = useState(false);
const [isTitleClicked, setIsTitleClicked] = useState(false);

const toggleTitleClick = () => {
    setIsContentVisible(!isContentVisible);
    setIsTitleClicked(!isTitleClicked);
};

    return (
        <div className={styles.popUpInfo}>
              <div
                className={`${styles.popUpTitle} ${isTitleClicked ? styles.clicked : ""}`}
                onClick={toggleTitleClick}
              >
                <p>Practical information</p>
                <img src={arrow} alt="arrow" className={`${styles.imgArrow} ${isTitleClicked ? styles.rotate : ""}`} />
              </div>
              <div className={`${styles.popUpContent} ${isContentVisible ? styles.open : ""}`}>
                    <p>{info}</p>
              </div>
        </div>
    );
};

export default PopUpInfo;