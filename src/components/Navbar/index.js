import { Link } from "react-router-dom";
import Logo from "./assets/logo/cf-and-icon.png"
import '../Navbar/navbar.css';

function Navbar() {
    return (
        <div id="nav">
            <div className="container w-100 d-flex justify-content-between p-0">
                <div id="cf-logo">
                    <img src={Logo} alt="cf-logo" height="50px" width="150px"></img>
                </div>
                <ul className="m-0 p-0">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <Link to="/Services">Services</Link>
                    </li>
                    <li>
                        <Link to="/Sectors">Sectors</Link>
                    </li>
                    <li>
                        <Link to="/Careers">Careers</Link>
                    </li>
                    <li>
                        <Link to="/Sustainability">Sustainability</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;