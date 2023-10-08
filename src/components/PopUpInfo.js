
import arrow from "../images/arrow-30.png";
import styles from "../styles/popUpInfo.module.css";

import React, { useState } from "react";

const PopUpInfo = ({ info }) => {
const [isContentVisible, setIsContentVisible] = useState(false);

    return (
        <div className={styles.popUpInfo}>
              <div
                className={styles.popUpTitle}
                onClick={() => setIsContentVisible(!isContentVisible)}
              >
                <p>Practical information</p>
                <img src={arrow} alt="arrow" />
              </div>
              {isContentVisible && (
                <div className={styles.popUpContent}>
                    <p>{info}</p>
                </div>
              )}
        </div>
    );
};

export default PopUpInfo;