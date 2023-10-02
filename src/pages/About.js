
import { Link } from "react-router-dom";

import styles from "../styles/about.module.css";
import { useActivePage } from "../customHooks/useActivePage"; 

const AboutMe = () => {
    const { activePage, setActive } = useActivePage();
    
    const handleBackClick = () => {
        setActive("main");
    };

    return (
        <section className={styles.aboutMeSection}>
            <p>e to vsjo...</p>
            <Link to="/"
            onClick={handleBackClick}>
                ⬅️
            </Link>
        </section>
    );
}

export default AboutMe;