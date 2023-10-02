
import { Link } from "react-router-dom";

import styles from "../styles/about.module.css";

const title = "About ME";  // somehow put this title when i click on about page 

const AboutMe = () => {
    return (
        <section className={styles.aboutMeSection}>
            <p>e to vsjo...</p>
            <Link to="/">⬅️</Link>
        </section>
    );
}

export default AboutMe;