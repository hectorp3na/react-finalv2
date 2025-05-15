import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/b7438e6d-4fe4-46d1-9917-4a204a998d59.png";

const Footer = () => {
    return (
        
      <footer>
        <div className="container">
          <div className="row row__column">
            <Link to="/">
              <figure className="footer__logo">
                <img src={logo} className="footer__logo--img" alt="Logo" />
              </figure>
            </Link>
            <div className="footer__list">
              <Link to="/" className="footer__link">
                Home
              </Link>
              <span className="footer__link no-cursor">Contact</span>
              <span className="footer__link no-cursor">About</span>
              <Link to="/movies" className="footer__link">
                Movies
              </Link>
            </div>
            <div className="footer__copyright">Copyright &copy; 2025 Blinker</div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  