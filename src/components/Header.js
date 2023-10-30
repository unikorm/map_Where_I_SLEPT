
import styles from "../styles/header.module.css";
import logo from "../images/forest-48.svg";

import { Link } from 'react-router-dom';


// const scrollToTop = () => {
//     window.scrollTo({top: 0, behavior: "smooth"});
// };

const Header = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <div className={styles.logoSectionLeft}>
                    <Link to="/"
                        className={styles.logoLinkStyle}>
                        <img src={logo} alt="logo" />
                        <p>myPATH</p>
                    </Link>
                </div>
                <ul className={styles.menuNavigationCentre}>
                    <li>
                        <Link to="/aboutMe"
                            className={styles.linkStyleMenu}>
                            About US
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;