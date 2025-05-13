import React from "react";
import logo from '../assets/b7438e6d-4fe4-46d1-9917-4a204a998d59.png';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navlinks li">
        <li href="#">
          {" "}
          <span style={{ color:"#02439f", }}>Home</span>{" "}
        </li>
        <li>
          <a href="user.html">Search Movies</a>
        </li>
        <li className="contact-btn" href="#">
          Contact{" "}
        </li>
      </div>
    </nav>
  );
};

export default Nav;