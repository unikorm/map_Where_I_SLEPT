
import styles from "../styles/footer.module.css";
import logo from "../images/forest-96.svg";
import GitHubLogo from "../images/github-40.svg";

import { Link, useLocation } from 'react-router-dom';


const Footer = () => {

    const location = useLocation();

    const scrollToTop = () => {
        if (location.pathname !== "/") {
            window.scrollTo(0, 0);
        } else {
            window.scrollTo({top: 0, behavior: "smooth"}); 
        };             
    };




    return (
        <footer>
            <section className={styles.logoInFooter}>
                <div className={styles.logoSectionLeft}>
                    <Link to="/"
                        onClick={scrollToTop}
                        className={styles.logoLinkStyle}>
                        <img src={logo} alt="logo"/>
                        <p>myPATH</p>
                    </Link>
                </div>
            </section>
            <section className={styles.menuAndContactsInFooter}>
                <ul className={styles.contactsSectionInFooter}>
                    <li className={styles.linkToGithub}>
                        <Link to="https://github.com/unikorm"
                            target="_blank" rel="noopener noreferrer"
                            >
                            <img src={GitHubLogo} alt="GITHUB" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutMe"
                            className={styles.linkStyleMenu}>
                            About US
                        </Link>
                    </li>
                </ul>
            </section>
        </footer>
    );
};

export default Footer;