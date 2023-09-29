
import "../App.css";
import logo from "../images/logo.svg";

import { Link, useLocation } from 'react-router-dom';

const linkStyle = {
    textDecoration: "none",
    color: "red",
};

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
};

const Header = () => {
    const location = useLocation();

    const homePageLink = location.pathname === "/" ? <Link to="/" style={linkStyle} onClick={scrollToTop}>myPATH</Link> : <Link to="/" style={linkStyle}>myPATH</Link>

    return (
        <header className="header">
            <nav className="navigation">
                <div className="logoSectionLeft">
                    <img src={logo}/>
                    { homePageLink }
                </div>
                <ul className="menuNavigationCentre">
                    <li>
                        <Link to="/aboutMe" style={linkStyle}>About ME</Link>
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