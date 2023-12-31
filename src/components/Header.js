
import styles from "../styles/header.module.css";
import logo from "../images/forest-48.svg";

import { Link, useLocation } from 'react-router-dom';


const Header = ({ isAboutMePage }) => {

    const location = useLocation();

    const scrollToTop = () => {
        if (location.pathname !== "/") {
            window.scrollTo(0, 0);
        } else {
            window.scrollTo({top: 0, behavior: "smooth"}); 
        };             
    };




    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <div className={styles.logoSectionLeft}>
                    <Link to="/"
                        onClick={scrollToTop}
                        className={styles.logoLinkStyle}>
                        <img src={logo} alt="logo" />
                        <p>myPATH</p>
                    </Link>
                </div>
                <ul className={styles.menuNavigationCentre}>
                    <li>
                        <Link to="/aboutMe"
                            className={`${styles.linkStyleMenu} ${isAboutMePage ? styles.active : ""}`}>
                            About US
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;