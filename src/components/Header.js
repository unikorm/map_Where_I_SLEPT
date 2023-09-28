
import "../App.css";

import { Link, useNavigate } from 'react-router-dom';
import About from "../pages/About";

const Header = () => {
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate("About")
    };

    return (
        <header>
        <ul className="navigation">
            <li>About ME</li>  {/* here must be link to about me */}
        </ul>
        </header>
    );
}

export default Header;