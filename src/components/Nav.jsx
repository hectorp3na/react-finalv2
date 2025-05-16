import React, { useState } from "react";
import logo from "../assets/b7438e6d-4fe4-46d1-9917-4a204a998d59.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => {
    setMenuVisible(true);
    setTimeout(() => setMenuOpen(true), 10); // Slight delay for transition
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
    setTimeout(() => setMenuVisible(false), 300); // Match transition duration
  };


  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="navlinks li">
        <li>
          <a href="/" style={{ color: "#02439f" }}>
            Home
          </a>
        </li>
        <li>
          <a href="/movies">Search Movies</a>
        </li>
        <li>
          <a href="/" className="contact-btn">
            Contact
          </a>
        </li>
      </ul>

      <button className="btn__menu" onClick={openMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {menuVisible && (
        <div className={`menu__backdrop ${menuOpen ? "slide-in" : "slide-out"}`}>
          <button
            className="btn__menu btn__menu--close"
            onClick={closeMenu}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="menu__list">
              <a href="/movies" className="menu__link" onClick={closeMenu}>
                Search Movies
              </a>
            </li>
            <li className="menu__list">
              <a href="/" className="menu__link" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
