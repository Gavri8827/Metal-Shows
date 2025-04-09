import {Link} from "react-router-dom";
import '../styles/Navbar.css';
function Navbar () {
    return (
        <header>
            <nav>
                <Link to="/">Home Page</Link> 
                <Link to="/AdminLogin">Admin Login</Link>

            </nav>
        </header>
        
    );

}

export default Navbar;