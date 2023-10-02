
import "../styles/footer.css";
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
            <section className="logoInFooter">
                <div className="logoSectionLeft">
                    <img src={logo}/>
                    <Link to="/" onClick={includeScrollTOTop ? scrollToTop : undefined} className="logoLinkStyle">myPATH</Link>
                </div>
            </section>
            <section className="menuAndContactsInFooter">
            <ul className="contactsSectionInFooter">
                    <li>here will be contact maybe</li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;