import { Link } from "react-router-dom";
import Logo from "./assets/logo/cf-and-icon.png"

function Navbar() {
    return (
        <div id="nav" class="w-100 d-flex justify-content-between">
            <div id="cf-logo">
                <img class="pt-2" src={Logo} alt="cf-logo" height="50px" width="150px"></img>
            </div>
            <ul class="m-0 p-0">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    Services
                </li>
                <li>
                    Sectors
                </li>
                <li>
                    Careers
                </li>
                <li>
                    Sustainability
                </li>
                <li>
                    <Link to="/About">About Us</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;