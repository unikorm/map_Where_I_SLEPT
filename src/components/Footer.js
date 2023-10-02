
import styles from "../styles/footer.module.css";
import logo from "../images/logo.svg";

import { Link, useLocation } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
};

const Footer = () => {
    const location = useLocation();

    const includeScrollTOTop = location.pathname === "/";
    const isAnotherPageActive = location.pathname === "/aboutMe";

    return (
        <footer>
            <section className={styles.logoInFooter}>
                <div className={styles.logoSectionLeft}>
                    <Link to="/" onClick={includeScrollTOTop ? scrollToTop : undefined} className={styles.logoLinkStyle}><img src={logo}/><p>myPATH</p></Link>
                </div>
            </section>
            <section className={styles.menuAndContactsInFooter}>
                <ul className={styles.contactsSectionInFooter}>
                    <li>
                    <Link to="/aboutMe" className={`${styles.linkStyleMenu} ${isAnotherPageActive ? styles["active-link"] : ""}`}>About ME</Link>
                    </li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;