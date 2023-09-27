
import '../App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from "../pages/About";

const Header = () => {
    return (
        <Router>
            <header>
            <ul className="navigation">
                <li>
                    <Link to="/aboutMe">About ME</Link>
                </li>
            </ul>
            </header>
            
            <Routes>
                <Route path="/aboutMe" Component={About} />
            </Routes>
        </Router>
        
    );
}

export default Header;