import { Link } from "react-router-dom";
import Logo from "./assets/logo/cf-and-icon.png"
import '../Navbar/navbar.css';
import eatonDataQrCode from './assets/logo/Eaton_Data_QRCode.png';

function Navbar() {
  return (
    <div id="nav">
      <div className="container w-100 d-flex justify-content-between p-0">
        <div id="cf-logo">
          <img src={Logo} alt="cf-logo" height="50px" width="150px"></img>
        </div>
        <ul className="m-0 p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Sectors">Sectors</Link>
          </li>
          <li>
            <Link to="/Careers">Careers</Link>
          </li> */}
          <div className="dropdown">
            <button className="dropbtn">Sustainability&nbsp;
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/Overview">Overview</Link>
              <Link to="/Environmental">Environment</Link>
              <Link to="/Social">Social</Link>
              <Link to="/Governance">Governance</Link>
              <div className="dropdown1">
                <button className="dropbtn1">Eaton Data</button>
                <div className="dropdown-content1 p-3 border border-dark border-2">
                  <img className="img-fluid" src={eatonDataQrCode}></img>
                </div>
              </div>
            </div>
          </div>
          <li>
            <Link to="http://member.cfphilippines.com" target="_blank">Employee</Link>
          </li>
          {/* <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar;