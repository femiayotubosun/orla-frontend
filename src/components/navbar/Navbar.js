import React from "react";

import "./navbar.css";
import logo from "../../assets/images/logo2.PNG";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartPlus,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="orla__navbar">
      <div className="orla__navbar-hamburger">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="orla__navbar__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="orla__navbar__navlinks">
        <a href="http://www.google.com">Home</a>
        <a href="http://www.google.com">About</a>
        <a href="http://www.google.com">Product</a>
        <a href="http://www.google.com">Blog</a>
        <a href="http://www.google.com">Shop</a>
        <a href="http://www.google.com">Contact</a>
      </div>

      <div className="orla__navbar__icons">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faCartPlus} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
};

export default Navbar;
