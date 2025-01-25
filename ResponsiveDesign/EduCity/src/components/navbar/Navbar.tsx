import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="container">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Programe</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contacts</button>
        </li>
      </ul>
    </nav>
  );
};
