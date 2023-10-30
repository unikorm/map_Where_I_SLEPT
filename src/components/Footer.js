
import styles from "../styles/footer.module.css";
import logo from "../images/forest-96.svg";
import GitHubLogo from "../images/github-40.svg";

import { Link } from 'react-router-dom';

// const scrollToTop = () => {
//     window.scrollTo({top: 0, behavior: "smooth"});
// };

const Footer = () => {

    return (
        <footer>
            <section className={styles.logoInFooter}>
                <div className={styles.logoSectionLeft}>
                    <Link to="/"
                        className={styles.logoLinkStyle}>
                        <img src={logo} alt="logo"/>
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
                            className={styles.linkStyleMenu}>
                            About US
                        </Link>
                    </li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;