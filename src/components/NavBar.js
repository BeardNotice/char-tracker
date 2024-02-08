import {NavLink} from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    return(
        <nav>
            <NavLink 
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
            to="/about"
            className="nav-link"
            >
                About
            </NavLink>
            <NavLink to="/character-creation" className="nav-link">
                Character Creation
            </NavLink>
        </nav>
    );
};

export default NavBar;