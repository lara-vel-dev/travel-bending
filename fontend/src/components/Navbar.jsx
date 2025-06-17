import { PiAirplaneTiltFill } from "react-icons/pi";
import { MdLuggage, MdLogout } from "react-icons/md";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ auth }) => {
  const [activeLink, setActiveLink] = useState("");
  return (
    <>
      <nav className={`navbar ${auth ? "navbar-auth" : ""}`}>
        <a onClick={() => setActiveLink("")} href="#">
          <img
            className="navbar_img"
            src="src/assets/img/logo.png"
            alt="Logo"
          />
        </a>
        <ul className="navbar_links">
          <li className="navbar_links__link">
            <a
              onClick={() => setActiveLink("trips")}
              className={activeLink == "trips" ? "active" : ""}
              href="#"
            >
              <PiAirplaneTiltFill className="navbar_links__link_icon" /> My
              trips
            </a>
          </li>
          <li className="navbar_links__link">
            <a
              onClick={() => setActiveLink("reservation")}
              className={activeLink == "reservation" ? "active" : ""}
              href="#"
            >
              <MdLuggage className="navbar_links__link_icon" /> My reservations
            </a>
          </li>
          <li className="navbar_links__link">
            <a
              onClick={() => setActiveLink("favorite")}
              className={activeLink == "favorite" ? "active" : ""}
              href="#"
            >
              <FaHeart className="navbar_links__link_icon heart" /> My favorites
            </a>
          </li>
        </ul>
        <div className="navbar_btns">
          <button className="btn login">Login</button>
          <button className="btn register">Register</button>
          <button
            className="navbar_btns__btn"
            style={auth ? { display: "inline" } : { display: "none" }}
          >
            <FaUserCircle className="navbar_btns__btn_icon" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
