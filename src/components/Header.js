
import "../App.css";

import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: "none",
    color: "red",


};

const Header = () => {

    return (
        <header>
        <ul className="navigation">
            <li>
                <Link to="/aboutMe" style={linkStyle}>About ME</Link>
            </li>
        </ul>
        </header>
    );
}

export default Header;