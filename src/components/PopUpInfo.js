
import arrow from "../images/arrow-30.png";
import styles from "../styles/popUpInfo.module.css";

import React, { useState } from "react";

const PopUpInfo = ({ info }) => {
  const [state, setState] = useState({
    isContentVisible: false,
    isTitleClicked:false,
  });

  const toggleTitleClick = () => {
      setState({
        ...state,
        isContentVisible: !state.isContentVisible,
        isTitleClicked: !state.isTitleClicked,
      });
  };

      return (
          <div className={styles.popUpInfo}>
                <div
                  className={styles.popUpTitle}
                  onClick={toggleTitleClick}
                >
                  <p>Practical information</p>
                  <img src={arrow} alt="arrow" className={`${styles.imgArrow} ${state.isTitleClicked ? styles.rotate : ""}`} />
                </div>
                <div className={`${styles.popUpContent} ${state.isContentVisible ? styles.open : ""}`}>
                  <p>{info}</p>
                </div>
          </div>
      );
};

export default PopUpInfo;