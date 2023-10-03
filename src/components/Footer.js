
import styles from "../styles/footer.module.css";
import logo from "../images/forest-96.svg";
import GitHubLogo from "../images/github-40.svg";
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
                    <li className={styles.linkToGithub}>
                        <Link to="https://github.com/unikorm" >
                            <img src={GitHubLogo} alt="GITHUB" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutMe"
                        onClick={handleAboutMeClick}
                        className={`${styles.linkStyleMenu} ${isAnotherPageActive ? styles["active-link"] : ""}`}>
                            About US
                        </Link>
                    </li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;