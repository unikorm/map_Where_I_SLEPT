
import styles from "../styles/about.module.css";

import { Link } from "react-router-dom";

const AboutMe = () => {

    return (
        <section className={styles.aboutMeSection}>
            <p>e to vsjo...</p>
            <Link to="/">
                ⬅️
            </Link>
        </section>
    );
}

export default AboutMe;