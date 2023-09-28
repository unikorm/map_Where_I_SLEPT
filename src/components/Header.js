
import "../App.css";

import { Link } from 'react-router-dom';
import About from "../pages/About";

const Header = () => {

    return (
        <header>
        <ul className="navigation">
            <li>
                <Link to="/aboutMe">About ME</Link>
            </li>
        </ul>
        </header>
    );
}

export default Header;