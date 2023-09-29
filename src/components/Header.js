
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
                <div className="logoSection">
                    <img src={logo}/>
                    { homePageLink }
                </div>
                <ul className="menuNavigation">
                    <li>
                        <Link to="/aboutMe" style={linkStyle}>About ME</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;