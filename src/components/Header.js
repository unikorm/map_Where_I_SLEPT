
import styles from "../styles/header.module.css";
import logo from "../images/logo.svg";
import { useActivePage } from "../customHooks/useActivePage";

import { Link } from 'react-router-dom';


const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
};

const Header = () => {
    const { activePage, setActive } = useActivePage();

    const includeScrollTOTop = activePage === "main";
    const isAnotherPageActive = activePage === "aboutMe";

    const handleAboutMeClick = () => {
        setActive("aboutMe");
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <div className="logoSectionLeft">
                    <Link to="/" onClick={() => {
                        setActive("main");
                        if (includeScrollTOTop) {
                            scrollToTop();
                        }}} className={styles.logoLinkStyle}>
                            <img src={logo}/>
                            <p>myPATH</p>
                    </Link>
                </div>
                <ul className={styles.menuNavigationCentre}>
                    <li>
                        <Link to="/aboutMe"
                        onClick={handleAboutMeClick}
                        className={`${styles.linkStyleMenu} ${isAnotherPageActive ? styles["active-link"] : ""}`}>
                            About ME
                        </Link>
                    </li>
                </ul>
                <div className={styles.buttonRight}>
                    <button type="button" className={styles.buttonToGithub}>my GITHUB</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;