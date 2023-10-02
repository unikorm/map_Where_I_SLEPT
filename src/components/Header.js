
import "../styles/header.css";
import logo from "../images/logo.svg";

import { Link, useLocation } from 'react-router-dom';


const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
};

const Header = () => {
    const location = useLocation();

    const includeScrollTOTop = location.pathname === "/";
    const isAboutMeActive = location.pathname === "/aboutMe";

    return (
        <header className="header">
            <nav className="navigation">
                <div className="logoSectionLeft">
                    <img src={logo}/>
                    <Link to="/" onClick={includeScrollTOTop ? scrollToTop : undefined} className="logoLinkStyle">myPATH</Link>
                </div>
                <ul className="menuNavigationCentre">
                    <li>
                        <Link to="/aboutMe" className={`linkStyleMenu ${isAboutMeActive ? "active-link" : ""}`}>About ME</Link>
                    </li>
                </ul>
                <div className="buttonRight">
                    <button type="button" className="buttonToGithub">my GITHUB</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;