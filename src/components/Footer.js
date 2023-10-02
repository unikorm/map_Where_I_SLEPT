
import styles from "../styles/footer.module.css";
import logo from "../images/logo.svg";
import { useActivePage } from "../customHooks/useActivePage";

import { Link } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
};

const Footer = () => {
    const { activePage, setActive } = useActivePage();

    const includeScrollTOTop = activePage === "main";
    const isAnotherPageActive = activePage === "aboutMe";

    const handleAboutMeClick = () => {
        setActive("aboutMe");
    };

    return (
        <footer>
            <section className={styles.logoInFooter}>
                <div className={styles.logoSectionLeft}>
                    <Link to="/" onClick={() => {
                        setActive("main");
                        if (includeScrollTOTop) {
                            scrollToTop();
                        }}} className={styles.logoLinkStyle}>
                            <img src={logo} alt="Logo"/>
                            <p>myPATH</p>
                    </Link>
                </div>
            </section>
            <section className={styles.menuAndContactsInFooter}>
                <ul className={styles.contactsSectionInFooter}>
                    <li>
                        <Link to="/aboutMe"
                        onClick={handleAboutMeClick}
                        className={`${styles.linkStyleMenu} ${isAnotherPageActive ? styles["active-link"] : ""}`}>
                            About ME
                        </Link>
                    </li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;