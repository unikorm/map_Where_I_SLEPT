
import "../App.css";
import logo from "../images/logo.svg";

import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: "none",
    color: "red",


};

const Header = () => {

    return (
        <header className="header">
            <nav>
                <div>
                    <Link to="/" ><img src={logo} className=""/></Link>
                </div>
                <ul className="navigation">
                    <li>
                        <Link to="/aboutMe" style={linkStyle}>About ME</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;