import React, { useState } from "react";
import "./App.css";
import logo from "./images/logo.svg";
import Menu from "./Menu";

// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isopened, openTheMenu] = useState(false);
  // const menuS = {
  //   isOpened: false,
  // };
  return (
    <header className="nav-bar">
      {/* Logo */}
      <img src={logo} alt="logo" className="logo" />

      {/* shows only for pc screens '''*/}
      <nav className="navPc">
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <ul>
          <li>Login</li>
          <li className="signUp">Sign Up</li>
        </ul>
      </nav>
      {/* shows only for pc screens '''*/}

      <FontAwesomeIcon
        icon={faBars}
        className="humburger"
        onClick={() => openTheMenu(!isopened)}
      />
      {isopened && <Menu />}
    </header>
  );
};

export default NavBar;
