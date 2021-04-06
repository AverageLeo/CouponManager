import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import logoutIcon from "../../assets/logout-icon.png";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <header>
        <img className="logo" src={logo} alt="Logo" />
        <div className="path-5" />
        <div className="hello-yuval">Hello Yuval</div>
      </header>

      <div className="logout-area">
        <div className="logout-text">Logout</div>
        <img className="logout-icon" src={logoutIcon} alt="logout-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
